# 9.1 Sözlük

Kitap boyunca kullanılan terimlerin ve kısaltmaların tanımları. Her girdi,
terimin derinlemesine tanıtıldığı konuyu belirtir.

**Aktivite metriği.** Mühendislik hareketinin sayımı (commit, pull request,
kod satırı); değeri değil hacmi ölçer. Bkz. konu 3.4.

**Otobüs faktörü (bus factor).** Bir sistemin ya da bir bilgi parçasının
sürdürülemez hale gelmesi için erişilemez olması gereken kişi sayısı. Bir olan
otobüs faktörü ciddi bir risktir. Bkz. konu 3.5.

**Değişiklik başarısızlık oranı (change failure rate).** Üretimde düzeltme
gerektiren bir arızaya yol açan dağıtımların yüzdesi. Dört DORA metriğinden
biridir. Bkz. konu 2.10.

**Kontrol grafiği.** Bir metriğin zaman içindeki normal değişim aralığını
gösteren, gerçek bir kaymayı sıradan gürültüden ayırmak için kullanılan grafik.
Bkz. konu 1.6.

**Cycle time.** Lead time'ın aşamalara iç dökümü: kodlama, inceleme, test ve
dağıtım. Bkz. konu 2.6.

**CVSS (Common Vulnerability Scoring System).** Bir güvenlik açığının önem
derecesini puanlamak için kullanılan standartlaştırılmış ölçek. Bkz. konu 6.4.

**Döngüsel karmaşıklık (cyclomatic complexity).** Bir kod parçasının kontrol
akışındaki bağımsız yolların sayısı; Thomas J. McCabe tarafından 1976'da
tanıtıldı. Bkz. konu 4.1.

**DevEx (geliştirici deneyimi).** SPACE ile ilişkili, geri bildirim
döngüleri, bilişsel yük ve akış durumu etrafında örgütlenmiş daha geniş
çerçeve. Bkz. konu 3.7.

**Dağıtım sıklığı (deployment frequency).** Bir ekibin üretime ne sıklıkla
başarıyla sürüm çıkardığı. Dört DORA metriğinden biridir. Bkz. konu 2.10.

**DORA metrikleri.** DevOps Research and Assessment programından dört metrik:
dağıtım sıklığı, değişiklikler için lead time, değişiklik başarısızlık oranı
ve başarısız dağıtımdan kurtarma süresi. Bkz. konu 2.10.

**Hata bütçesi (error budget).** Bir hizmet düzeyi hedefi ile yüzde 100
güvenilirlik arasındaki izin verilen fark; harcanabilir bir kaynak olarak ele
alınır. Bkz. konu 6.1.

**Kaçan kusur (escaped defect).** Üretime ulaşan ve gerçek bir kullanıcıyı
etkileyen, incelemede ya da testte yakalananlardan ayrı tutulan kusur. Bkz.
konu 5.1.

**FinOps.** Değişken bulut altyapısı harcamasına mali hesap verebilirlik
getirme disiplini. Bkz. konu 5.4.

**Akış dağılımı (flow distribution).** Belirli bir dönemde tamamlanan akış
öğelerinin her akış öğesi türüne ait oranı. Bkz. konu 2.3.

**Akış verimliliği (flow efficiency).** Bir teslimat hattından geçen bir iş
parçası için aktif çalışma süresinin toplam geçen süreye oranı. Bkz. konu 2.5.

**Flow Framework.** Mik Kersten'in oluşturduğu, yazılım teslimatını bir değer
akışı olarak ele alan ve dört akış öğesi türü ile beş akış metriğiyle ölçen
yönetsel model. Bkz. konu 2.1.

**Akış öğesi (flow item).** Flow Framework'ün iş birimi: girişte
sınıflandırılan bir özellik, kusur, risk ya da borç öğesi. Bkz. konu 2.2.

**Akış yükü (flow load).** Bir değer akışında o anda aktif olan ya da bekleyen
akış öğelerinin toplam sayısı; Flow Framework'ün work in process için
kullandığı ad. Bkz. konu 2.4.

**Akış süresi (flow time).** Bir akış öğesinin değer akışına girişinden
teslimine kadar geçen toplam süre; yalnızca mühendisliği değil, tüm değer
akışını kapsar. Bkz. konu 2.4.

**Akış hızı (flow velocity).** Belirli bir dönemde tamamlanan akış öğelerinin
sayısı; Flow Framework'ün throughput ölçüsü. Bkz. konu 2.3.

**Goodhart yasası.** Bir ölçü hedef haline geldiğinde iyi bir ölçü olmaktan
çıkar ilkesi. Bu kitabın merkezi, yönlendirici fikri. Bkz. konu 1.2.

**Korkuluk metriği (guardrail metric).** Teşvik edilen bir metrik iyileşirken
bozulmaması gereken, manipülasyonu yakalamak üzere tasarlanmış eşlenik karşı
metrik. Bkz. konu 1.2.

**Sıcak nokta (hotspot).** Hem sık değişen (yüksek churn) hem de çok karmaşık
olan, sıcak nokta analiziyle belirlenen dosya ya da modül. Bkz. konu 4.3.

**Değişiklikler için lead time (lead time for changes).** Bir kod
değişikliğinin ilk commit'inden üretimde başarıyla dağıtılmasına kadar geçen
süre. Dört DORA metriğinden biridir. Bkz. konu 2.10.

**Little yasası.** Kararlı bir kuyruktaki ortalama öğe sayısının, ortalama
varış hızı ile bir öğenin sistemde geçirdiği ortalama sürenin çarpımına eşit
olduğunun kanıtı. Teslimata uygulandığında work in process, varış hızı çarpı
cycle time'a eşittir. Bkz. konu 2.7.

**Metrik ağacı.** En üstteki bir sonuç metriğini, etkenleri üzerinden tek tek
ekiplerin sahip olduğu operasyonel metriklere bağlayan yapı. Bkz. konu 1.3.

**MTTA (mean time to acknowledge).** Bir olayın bildiriminden birinin yanıtlama
sorumluluğunu üstlenmesine kadar geçen süre. Bkz. konu 6.2.

**MTTD (mean time to detect).** Bir olayın fiilen başlamasından birinin onun
gerçekleştiğini fark etmesine kadar geçen süre. Bkz. konu 6.2.

**MTTR (mean time to recovery / mean time to resolve).** Bir arızadan sonra
hizmetin tamamen geri getirilmesi için geçen süre. Hem dağıtımdan kaynaklanan
arızalar (konu 2.10) hem de genel olaylar (konu 6.2) için kullanılır.

**Mutasyon testi (mutation testing).** Bir test paketinin bunları gerçekten
yakalayıp yakalamadığını denetlemek için koda kasıtlı olarak küçük, yapay
hatalar sokan, kapsama ölçümünü tamamlayan teknik. Bkz. konu 4.2.

**Kuzey yıldızı metriği.** Bir kurumun sunduğu çekirdek değeri en iyi yakalayan,
metrik ağacının tepesinde duran tek ölçü. Bkz. konu 1.3.

**Sonuç telemetrisi (outcome telemetry).** Aktivite ya da çıktı yerine gerçek
sonuçların sürekli, araçlarla donatılmış ölçümü. Bkz. konu 7.4.

**Tam ve doğru yüzdesi (%C/A).** Bir alt akış ekibinin yeniden iş gerekmeden
işleyebildiği birimlerin yüzdesi; klasik Lean değer akışı haritalamasından.
Bkz. konu 2.8.

**İşlem süresi (process time, PT).** Tek bir birim üzerinde fiilen elle çalışmaya
harcanan, beklemeden ayrı tutulan süre; klasik Lean değer akışı
haritalamasından. Bkz. konu 2.8.

**Kuyruk kuramı (queueing theory).** Bekleme hatlarının matematiksel
incelemesi; work in process, varış hızı ve kullanım oranının bekleme süresini
nasıl belirlediğini açıklamak için teslimat hatlarına uygulanır. Bkz. konu 2.7.

**ROI (yatırım getirisi).** Bir girişimin maliyetine göre mali getirisi; burada
varsayıma değil, belgelenmiş maliyet ve sonuç kanıtına dayanarak kurulur. Bkz.
konu 5.5.

**Yuvarlanan verim (rolled throughput yield).** Bir değer akışındaki her
aşamanın tam ve doğru yüzdelerinin çarpılmasıyla bulunan, yeniden işin çok
aşamalı bir hatta nasıl bileşik biçimde büyüdüğünü gösteren değer. Bkz.
konu 2.8.

**SLI (hizmet düzeyi göstergesi).** Gecikme ya da hata oranı gibi bir hizmetin
sağlığına dair doğrudan ölçülen sinyal. Bkz. konu 6.1.

**SLO (hizmet düzeyi hedefi).** Bir hizmet düzeyi göstergesi için hedef aralık.
Bkz. konu 6.1.

**SPACE çerçevesi.** Geliştirici üretkenliği için beş boyutlu bir çerçeve:
Memnuniyet ve iyi oluş (Satisfaction and well-being), Performans
(Performance), Aktivite (Activity), İletişim ve iş birliği (Communication and
collaboration) ve Verimlilik ve akış (Efficiency and flow). Bkz. konu 3.1.

**SRE (site reliability engineering).** Google'da öncülük edilen, yazılım
mühendisliği yaklaşımlarını operasyonlara ve güvenilirliğe uygulama disiplini.
Bkz. konu 6.1.

**Takt süresi (takt time).** Müşteri talebini temiz biçimde karşılamak için bir
iş biriminin tamamlanabileceği azami kabul edilebilir süre; klasik Lean değer
akışı haritalamasından. Bkz. konu 2.8.

**Teknik borç.** Bir kod tabanındaki geçmiş kısayolların birikmiş maliyeti;
utanılacak bir sır değil, yönetilebilir bir ödünleşimi anlatan bir metafor.
Bkz. konu 4.5.

**TCO (toplam sahip olma maliyeti).** Bir girişimin ya da sistemin yalnızca
başlangıç maliyetini değil, süregelen bakım ve altyapıyı da içeren, ömrü
boyunca tüm maliyeti. Bkz. konu 5.5.

**Birim ekonomisi (unit economics).** Maliyetin opak bir toplam olarak değil,
sunulan anlamlı değer birimi başına (müşteri başına, işlem başına) ifadesi.
Bkz. konu 5.4.

**Kullanım oranı (utilization).** Bir kaynağın mevcut kapasitesinin meşgul
olan oranı; varış hızının hizmet hızına bölünmesiyle hesaplanır. Kullanım tam
kapasiteye yaklaştıkça bekleme süresi kademeli değil, sert biçimde artar. Bkz.
konu 2.7.

**Değer akışı (value stream).** Bir fikri müşterinin aldığı değere dönüştüren
uçtan uca etkinlik dizisi; Flow Framework'ün ölçüm birimi. Bkz. konu 2.1.

**Gösteriş metriği (vanity metric).** Güvenilir biçimde yükselen, etkileyici
görünen ve hiçbir kararı değiştirmeyen metrik. Bkz. konu 1.1.

**Work in process (WIP).** Bir ekip ya da sistem genelinde herhangi bir anda
üzerinde aktif olarak çalışılan öğelerin sayısı. Bkz. konu 2.5.
