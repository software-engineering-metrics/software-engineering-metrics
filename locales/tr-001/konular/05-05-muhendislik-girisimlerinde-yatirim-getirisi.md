# 5.5 Mühendislik girişimlerinde yatırım getirisi

## Genel bakış ve motivasyon

Bu konu, önceki dört konunun ölçtüğü her şeyi, yani kaliteyi, benimsenmeyi,
sonuçları ve maliyeti, büyük mühendislik yatırım kararlarının çoğunu sonunda
belirleyen tek mali çerçevede bir araya getirerek Bölüm 5'i kapatır:
**[yatırım getirisi](https://en.wikipedia.org/wiki/Return_on_investment)
(ROI)**. Bir kuruluş ister bir platform modernizasyonunu, ister büyük bir yeniden
düzenleme (refactoring) çalışmasını, ister yeni bir ürün hattını finanse etmeye
karar versin, sonunda biri soruyu mali terimlerle yanıtlamak zorundadır: buna
harcadığımıza değer mi? Bu konu, o soruyu dürüstçe yanıtlamakla ilgilidir. Bunu bu
kitabın zaten kurduğu metrikleri kullanarak yapar; ya soruyu yanıtlamaktan kaçınmak
(bu, yatırım kararları üzerindeki etkiyi onu iyi yanıtlayacak donanıma daha az sahip
kişilere bırakmaktır) ya da tutmadığında itibarı zedeleyen şişirilmiş, sürdürülemez
bir gerekçeyle yanıtlamak yerine.

Bu konunun önerdiği disiplin, denklemin maliyet tarafı için konu 5.4'ün birim
ekonomisine, fayda tarafı için ise konu 5.3'ün, atıf belirsizliğine dürüst
yaklaşan sonuç metriklerine doğrudan yaslanır. Bu biçimde kurulan bir ROI
gerekçesi, basit ve çekici bir manşet sayıdan zorunlu olarak daha mütevazı ve
daha çekincelidir. Ama kitabın baştan beri vurguladığı belirleyici bir avantajı
vardır: incelemeden sağ çıkar. Savunulabilir ROI gerekçelerini tutarlı biçimde
kuran bir kuruluş, ara sıra fazla vaat eden bir kuruluştan daha fazla güven, dolayısıyla
gelecekteki yatırım kararlarında daha fazla özerklik kazanır.

Büyük ekiplerde ROI disiplini, stratejik ortak olarak görülen bir mühendislik
kuruluşunu, harcaması aktif olarak yatırım yapılmak yerine göz yumulan bir maliyet
merkezi olarak görülenden ayıran şeydir. Kurumsal kuruluşlar, diğer iş
yatırımlarına karşı sermaye için başarıyla rekabet etmek üzere titiz ROI
gerekçeleri kullanır. Devlet kuruluşları ise, çoğu zaman maliyet-fayda analizi
olarak yeniden çerçevelenen eşdeğer bir disiplini, belirsiz, kanıtsız vaatlere
sabrı az olan siyasi ve bütçesel baskıya karşı kamu teknoloji finansmanını elde
etmek ve sürdürmek için kullanır.

## Temel ilkeler

- **Dürüst bir ROI gerekçesi, bu kitabın diğer metriklerinden kurulur**, ayrıca
  uydurulmaz; maliyet konu 5.4'ten, fayda konu 5.1 ile 5.3 arasından.
- **Toplam sahip olma maliyeti, yalnızca ön maliyet değil, maliyet tarafına
  aittir.** Süregelen bakım, destek ve altyapı maliyeti bir sistemin ömrü boyunca
  birikerek artar.
- **Fayda tahminleri belirsizlik taşır; bunu açıkça belirtin**; tek, sahte kesinlikli
  bir sayı sunmak yerine.
- **Negatif ya da marjinal bir ROI bulgusu meşru, yararlı bir sonuçtur.** Disiplin,
  zaten alınmış kararları gerekçelendirmek için değil, kararları dürüstçe
  bilgilendirmek için vardır.
- **Gerçek ROI'yi sonradan izleyin, yalnızca önceden öngörülen gerekçeyi değil.**
  Gerçeklikle hiç karşılaştırılmayan bir öngörü kuruluşa hiçbir şey öğretmez.

## Öneriler

### Maliyet tarafını yalnızca ön yatırımdan değil, toplam sahip olma maliyetinden kurun

Yalnızca ilk geliştirme maliyetini değil, tam **[toplam sahip olma
maliyetini](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TCO)**
dahil edin: süregelen bakım, altyapı (konu 5.4'ün birim ekonomisi burada doğrudan
yararlıdır), destek ve girişimin tükettiği, alternatif işe gidebilecek mühendislik
kapasitesinin fırsat maliyeti. Yalnızca ön maliyete bakıldığında ucuz görünen bir
proje, süregelen bakım yükü dürüstçe hesaba katıldığında tüm ömrü boyunca pahalı
olabilir.

### Fayda tarafını belgelenmiş, dürüst sonuç kanıtından kurun

Fayda tahminlerini konu 5.1 ile 5.3'ün sonuç ölçümü disiplininden alın: azalan
olay ve destek maliyetine çevrilmiş kalite iyileştirmeleri, kullanım kaynaklı
değere çevrilmiş benimsenme verisi ve konu 5.3'ün dürüst, karıştırıcı etkenleri
kontrol edilmiş nedensel zincir yaklaşımıyla kurulmuş iş sonucu korelasyonları.
Gerçek ölçülmüş ya da karşılaştırılabilir tarihsel veri onu temellendirmek için
mevcutken, fayda tahminini ilk ilkelerden ya da iyimser varsayımdan uydurmaktan
kaçının.

### Belirsizliği tek bir sayı yerine bir aralıkla açıkça belirtin

ROI tahminlerini tek, sahte kesinlikli bir rakam olarak değil, bir aralık
(muhafazakâr bir senaryo ve iyimser bir senaryo) olarak sunun ve aralığı neyin
belirlediğini açıklayın: hangi belirli varsayım iyimser ya da kötümser çıkarsa
sonucu en çok kaydırırdı. Bu, konu 1.6'nın istatistik okuryazarlığı ilkesini
doğrudan yansıtır ve mali öngörüye uygular. Gerekçenin itibarını da korur; çünkü
yanlış çıkan tek bir nokta tahmini, gerçek sonucun içine düştüğü iyi açıklanmış
bir aralıktan çok daha fazla güveni zedeler.

### Negatif ya da marjinal bulguyu meşru bir sonuç olarak görün

ROI analiz sürecinizi gerçekten "buna değmez" sonucuna varabilecek biçimde kurun
ve kanıt destekliyorsa bu sonucu analizin başarısızlığı olarak değil, değerli bir
çıktı olarak görün. Girişim ne olursa olsun yalnızca olumlu ROI gerekçeleri
üretmekle tanınan bir kuruluş hızla itibarını kaybeder, çünkü paydaşlar analizin
bilgilendirmesi beklenen karardan gerçekte bağımsız olmadığını haklı olarak
çıkarır.

### Gerçek sonuçları öngörülen gerekçeyle karşılaştırın ve döngüyü herkese açık kapatın

Bir girişim tamamlandığında ya da anlamlı bir kilometre taşına ulaştığında,
gerçek ölçülmüş sonuçları özgün öngörülen aralıkla karşılaştırın ve bu
karşılaştırmayı, öngörünün yanıldığı yerler dahil, yayımlayın. Konu 3.7'nin anket
takibi önerisine benzeyen bu döngüyü kapatma disiplini, bir kuruluşun uzun vadeli
ROI öngörü itibarını inşa eden ve gerçek, görünür bir geri bildirim döngüsü yaratarak
gelecekteki tahminlerin doğruluğunu artıran şeydir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Basit, tek sayılı ROI iddiası | Çarpıcı, iletmesi kolay | Sahte kesinlikli; yanlış çıkmaya ve itibarı zedelemeye açık |
| Belirsizliği belirtilmiş aralık temelli ROI | Savunulabilir, incelemeden sağ çıkar, aralığı neyin belirlediği konusunda dürüst | Sunması daha karmaşık; daha fazla analitik çaba gerektirir |
| Yalnızca ön maliyet analizi | Basit, hızlı üretilir | Süregelen bakım ve destek yükünü dışarıda bırakarak gerçek maliyeti olduğundan düşük gösterir |
| Tam toplam sahip olma maliyeti analizi | Gerçek yatırım maliyetinin doğru, eksiksiz resmi | Özellikle süregelen maliyet öngörüsü için daha fazla veri toplamayı gerektirir |

Temel gerilim **ikna edici sadelik ile savunulabilir dürüstlük** arasındadır; bu,
konu 5.3'ün genel olarak sonuç iddiaları için adlandırdığı aynı gerilimdir ve
şimdi özellikle mali gerekçeye uygulanmaktadır. Basit, kendinden emin tek sayılı bir
ROI iddiasını bir karar vericiye o anda satmak daha kolaydır. Ama açık belirsizlik ve
tam toplam sahip olma maliyeti hesabıyla dürüst, aralık temelli bir gerekçe,
yatırımın ömrü boyunca gerçekten ayakta kalan ve kuruluşun yapması gereken bir
sonraki gerekçe için itibarını koruyan şeydir.

## Ekibinizle tartışılacak sorular

1. **Son büyük mühendislik yatırım gerekçemizde toplam sahip olma maliyetini mi
   hesaba kattık, yoksa yalnızca ön geliştirme maliyetini mi?** Özgün gerekçeye
   dönün ve süregelen bakım ile altyapı maliyetinin dahil edilip edilmediğine
   bakın; edilmediyse, ne ekleyeceklerini tahmin edin.

2. **Fayda tahminimiz belgelenmiş, ölçülmüş sonuç kanıtına mı dayanıyordu, yoksa
   iyimser varsayımdan mı kurulmuştu?** Yakın tarihli bir gerekçenin fayda
   tarafını asıl kanıt kaynağına kadar izleyin ve gerçekte ne kadar
   temellendirilmiş olduğunu dürüstçe değerlendirin.

3. **Bir aralık daha dürüst olacakken bir ROI tahminini hiç tek bir sayı olarak
   sunduk mu?** Yakın tarihli bir gerekçe için aralığın nasıl görüneceğini ve
   bu aralığın genişliğini hangi belirli varsayımın belirlediğini tartışın.

4. **ROI analiz sürecimiz hiç bir girişimin peşinden gitmeye değmediği sonucuna
   vardı mı ve bu sonuç nasıl karşılandı?** Geçmişteki her analiz olumlu
   sonuçlandıysa, bunun gerçekten sağlam girişim seçimini mi yansıttığını yoksa
   yalnızca paydaşların duymak istediği yanıtı üreten bir süreci mi
   yansıttığını dürüstçe tartışın.

5. **Tamamlanmış bir girişim için hiç geri dönüp gerçek sonuçları özgün öngörülen
   gerekçeyle karşılaştırdık mı?** Karşılaştırmadıysak, gerçek, tamamlanmış bir
   girişim seçin ve öngörü ile gerçeklik arasındaki boşluk ne kadar rahatsız edici
   çıkarsa çıksın, bu karşılaştırmayı şimdi grup egzersizi olarak yapın.

6. **Bir sonraki büyük ROI gerekçemizi mühendislik dışından birinin gerçek,
   şüpheci incelemesi altında savunulabilir kılmak için ne gerekir?** Bir sonraki
   planlı gerekçenizi adım adım gözden geçirin ve bir karar vericiye gitmeden önce
   mevcut kanıt zincirindeki en zayıf halkayı belirleyin.

## Sektörel bakış

**Girişim (startup).** Resmî ROI analizi, çoğu zaman daha basit bir hayatta kalma
ve büyüme sorusundan daha az ilgilidir: bu yatırım bir sonraki kilometre taşına ya
da finansman turuna ulaşmamıza yardımcı oluyor mu? Yine de aynı dürüstlük ilkesini
uygulayın; ekibin duygusal olarak zaten bağlandığı bir kararı gerekçelendirmek için
bir gerekçeyi şişirmeye direnin, çünkü yatırımcı incelemesi eninde sonunda bu
konunun önce içeride uygulamayı önerdiği şüpheciliğin aynısını uygulayacaktır.

**Küçük işletme.** ROI analizini kararın boyutuyla orantılı tutun: çok yıllık büyük
bir platform yatırımı bu konunun önerdiği tam disiplini hak eder, küçük bir araç
satın alımı ise aynı titizliğe ihtiyaç duymaz. Resmî analiz çabanızı en büyük, en
sonuç doğurucu birkaç kararınıza odaklayın.

**Kurumsal.** Bu ölçekte ROI disiplini, mühendisliğin daha köklü mali analiz
geleneklerine sahip diğer iş yatırımlarına karşı sermaye için başarıyla rekabet
edip etmediğini belirler. Bu konunun önerdiği tam toplam sahip olma maliyeti ve
aralık temelli disiplini standart pratik olarak kurun ve uzun vadeli öngörü
itibarını inşa eden, döngüyü kapatan izlemeye yatırım yapın.

**Kamu.** ROI'nin kamu sektörü karşılığı olan maliyet-fayda analizi, çoğu zaman
bütçe gerekçelendirmesinin resmî, zorunlu bir parçasıdır ve bulguların dış
denetimle ya da yasama incelemesiyle karşılaşabileceği yerlerde belirsizlik ve
toplam sahip olma maliyeti konusunda dürüstlük özellikle önemlidir. Faydayı
abartan ya da maliyeti olduğundan düşük gösteren bir analiz, keşfedildiğinde bir
programın finansman organı nezdindeki itibarına kalıcı zarar verir.

## Örnekler

**Kurumsal.** Bir lojistik teknolojisi şirketinin mühendislik liderliği, eski bir
monoliti mikro hizmet mimarisine taşımak için büyük bir yatırım önerdi ve ilk
başta ağırlıklı olarak öngörülen dağıtım sıklığı iyileşmelerine dayanan tek,
iyimser bir ROI rakamı sundu. Bir finans paydaşının şüpheci sorgulaması, gerekçenin
yeni mimarinin getireceği ciddi süregelen operasyonel karmaşıklığı ve altyapı
maliyetini hesaba katmadığını ortaya çıkardı. Tam toplam sahip olma maliyetiyle ve
hem muhafazakâr hem iyimser teslimat iyileşmesi senaryolarını yansıtan bir
aralıkla kurulan gözden geçirilmiş gerekçe, daha mütevazı ama yine de olumlu bir
beklenen getiri gösterdi. Kritik olarak, finans ekibinin incelemesinden sağ çıktı
ve finansmanı güvence altına aldı; özgün, abartılı gerekçe büyük olasılıkla bunu
yapamazdı.

**Kamu.** Bir eyalet hükümetinin mahkeme kayıtlarını sayısallaştırma programı,
ilk maliyet-fayda gerekçesini tek, kesin bir ROI rakamıyla yalnızca idari maliyet
tasarruflarına dayandırmıştı. Bağımsız bir bütçe ofisi incelemesi, öngörünün
vatandaş tarafındaki zaman tasarruflarını ya da hukuki süreçlerdeki azalmış hata
oranlarını hesaba katmadığını buldu; bu faydalar gerçekti ama idari maliyetten
nicelleştirmesi daha zor oldukları için dışarıda bırakılmıştı. Gözden geçirilmiş
analiz bu faydaları, ilgili gerçek ölçüm belirsizliğini yansıtan açıkça belirtilmiş
bir aralıkla dahil etti. Bu, daha güçlü ve önemlisi daha savunulabilir bir gerekçe
üretti ve bütçe ofisi onu, tam da neyi güvenle bildiği ve neyi bilmediği konusunda
şeffaf olduğu için onayladı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Titiz ROI disiplininin getirisi, biraz özyinelemeli biçimde, ROI disiplininin kendi
itibarıdır: bir girişimin peşinden gitmeye değmediği sonucuna ara sıra varmak
dahil, tutarlı biçimde dürüst, savunulabilir gerekçeler kuran bir kuruluş,
gerekçeleri daha önce fazla vaat ettikleri için şüpheyle karşılanan bir kuruluştan
daha fazla güven, dolayısıyla gelecekteki yatırım kararlarında daha fazla özerklik
kazanır. Yukarıdaki lojistik şirketi örneği bunu doğrudan gösterir: gözden
geçirilmiş, daha mütevazı ama dürüst gerekçe, şişirilmiş özgününün büyük
olasılıkla incelemede başarısız olacağı yerde başarılı oldu.

Bu disiplinin toplam sahip olma maliyeti, tam toplam sahip olma maliyeti tahminleri
kurmanın, fayda tahminlerini gerçek kanıta oturtmanın, belirsizliği açıkça
belirtmenin ve gerçek sonuçları sonradan izlemenin analitik çabasıdır. Bu çaba,
hızlı, kendinden emin tek sayılı bir sunumdan gerçekten daha fazla iştir ve
alternatifi kuruluşun yapması gereken her gelecek gerekçe için itibarını riske
attığı için yapmaya değerdir.

## Anti-desenler ve tuzaklar

- **Toplam sahip olma maliyetini dışarıda bırakan yalnızca ön maliyet analizi:**
  özellikle uzun ömürlü sistemler için gerçek yatırım maliyetini olduğundan düşük
  gösterir.
- **Fayda tahminlerini belgelenmiş kanıt yerine iyimser varsayımdan uydurmak:**
  incelemeden sağ çıkmayan bir gerekçe üretir.
- **Belirtilmiş bir aralık yerine tek, sahte kesinlikli bir ROI sayısı sunmak:**
  gerçek sonuç nokta tahmininden farklı çıktığında itibarı zedeler.
- **Yalnızca olumlu sonuçlar üreten bir analiz süreci:** paydaşlarca, sürecin
  gerçekten bağımsız olmadığının kanıtı olarak haklı biçimde okunur.
- **Gerçek sonuçları özgün öngörüye karşı hiç izlememek:** gelecekteki öngörü
  doğruluğunu iyileştirecek geri bildirim döngüsünü kaybeder.
- **Kararı gerçekten bilgilendirmek yerine, duygusal olarak zaten bağlanılmış bir
  kararı gerekçelendirmek için gerekçe kurmak:** şişirilmiş ROI gerekçelerinin
  çoğunun kök nedeni.

## Olgunluk modeli

- **Düzey 1, Başlangıç (Initiate):** ROI gerekçeleri gayriresmîdir, belgelenmiş
  kanıtla desteklenmez ve girişim ne olursa olsun neredeyse her zaman olumlu
  sonuçlanır.
- **Düzey 2, Gelişim (Develop):** Bazı gerekçeler maliyet ve fayda tahminlerini
  içerir, ama toplam sahip olma maliyeti tutarsız uygulanır ve belirsizlik nadiren
  açıkça belirtilir.
- **Düzey 3, Standartlaştırma (Standardize):** ROI gerekçeleri kuruluş genelinde
  tutarlı biçimde tam toplam sahip olma maliyetini, belgelenmiş fayda kanıtını ve
  gerçek belirsizliği yansıtan belirtilmiş bir aralığı kullanır.
- **Düzey 4, Yönetim (Manage):** Gerçek sonuçlar tamamlanmadan sonra özgün
  öngörülere karşı izlenir; karşılaştırma yayımlanır ve gelecekteki öngörüyü
  iyileştirmek için kullanılır.
- **Düzey 5, Orkestrasyon (Orchestrate):** Kuruluşun, bir girişimin peşinden
  gitmeye değmediği sonucuna doğru biçimde varan gerekçeler dahil, doğru, dürüst
  ROI öngörüsünde gösterilmiş, çok yıllık bir sicili vardır ve bu sicil
  mühendisliğe stratejik yatırım kararlarında güvenilen bir yer kazandırır.

## Tartışma önerileri

1. Şu anki en büyük yatırım gerekçemiz hangisi ve bugün gerçekten şüpheci bir incelemeden sağ çıkabilir mi?
2. Tamamlanmış bir girişimin gerçek sonucunu özgün ROI öngörüsüne karşı hiç izledik mi?
3. Analiz sürecimizin gerçekten "buna değmez" sonucuna varabilmesi için neyi değiştirmesi gerekir?
4. Mevcut maliyet tahminlerimizde en sık hangi toplam sahip olma maliyeti bileşeni eksik?
5. Bir sonraki planlı büyük yatırım gerekçemizdeki tek en zayıf kanıt halkası nedir?

## Temel çıkarımlar

- ROI gerekçelerini bu kitabın **diğer metriklerinden** kurun: maliyeti birim
  ekonomisinden (konu 5.4), faydayı belgelenmiş sonuç kanıtından (konu 5.1 ile
  5.3), uydurma varsayımlardan değil.
- Yalnızca ön maliyeti değil **toplam sahip olma maliyetini** dahil edin ve fayda
  tahminlerini tek, sahte kesinlikli bir sayı olarak değil, **açık belirsizlikli
  bir aralık** olarak belirtin.
- Bir girişimin **peşinden gitmeye değmediği** sonucuna gerçekten varabilen bir süreç
  kurun; yalnızca olumlu sonuçlar üreten bir analiz güvenilir değildir.
- Tamamlandıktan sonra **gerçek sonuçları öngörüye karşı izleyin** ve uzun vadeli
  öngörü itibarı inşa etmek için karşılaştırmayı yayımlayın.
- Dürüst, savunulabilir ROI disiplini, zaman içinde mühendisliğe stratejik yatırım
  kararlarında **güvenilen bir yer** kazandıran şeydir.

## Kaynaklar ve ileri okuma

- *How to Measure Anything*, Douglas W. Hubbard (belirsiz değeri nicelleştirmek
  ve savunulabilir, aralık temelli tahminler kurmak).
- *Cloud FinOps*, J.R. Storment ve Mike Fuller (bulut tabanlı altyapı yatırımı
  için toplam sahip olma maliyeti disiplini).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (teslimat pratiği yatırımını iş getirisine bağlamanın
  araştırma temeli).
- ABD Yönetim ve Bütçe Ofisi (OMB) Circular A-94, federal programlar için
  maliyet-fayda analizi rehberliği (kamu sektörü ROI disiplini).
