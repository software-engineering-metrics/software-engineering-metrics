# 9.2 Metrik tanımları ve formüller referansı

Kitaptaki her formül tek yerde. Her girdi, manipülasyon riski ve korkuluğu
dahil tam tartışmanın bulunduğu konuyu belirtir. Bunu hızlı bir arama aracı
olarak kullanın, konunun kendisinin yerine koymayın.

## Akış metrikleri (Bölüm 2)

| Metrik | Formül | Konu |
| --- | --- | --- |
| Akış hızı (flow velocity) | Birim zamanda tamamlanan akış öğelerinin sayısı | 2.3 |
| Akış dağılımı (flow distribution) | (Bir akış öğesi türünün tamamlanan öğeleri) / (Toplam tamamlanan öğe) x %100 | 2.3 |
| Akış süresi (flow time) | Bir akış öğesinin değer akışına girişinden teslimine kadar geçen süre | 2.4 |
| Akış yükü (flow load) | Değer akışında o anda aktif olan ya da bekleyen akış öğelerinin sayısı | 2.4 |
| Little yasası | Akış yükü (work in process) = Varış hızı x Akış süresi (cycle time) | 2.4, 2.7 |
| Akış verimliliği (flow efficiency) | Aktif çalışma süresi / Toplam geçen süre x %100 | 2.5 |
| Cycle time | Aşama sürelerinin toplamı: kodlama + devralma + inceleme + test + dağıtım | 2.6 |
| Kullanım oranı (utilization) | Varış hızı / Hizmet hızı | 2.7 |
| Tam ve doğru yüzdesi (%C/A) | (Yeniden iş olmadan alt akışta kullanılabilen birimler) / (Toplam birim) x %100 | 2.8 |
| Yuvarlanan verim (rolled throughput yield) | 1. aşamanın %C/A'sı x 2. aşamanın %C/A'sı x ... x N. aşamanın %C/A'sı | 2.8 |
| Takt süresi (takt time) | Kullanılabilir çalışma süresi / O dönemdeki müşteri talebi | 2.8 |
| İlk incelemeye kadar geçen süre | Pull request'in açılmasından ilk esaslı gözden geçirici yanıtına kadar geçen süre | 2.9 |
| Dağıtım sıklığı (deployment frequency) | Birim zamanda başarılı üretim dağıtımlarının sayısı | 2.10 |
| Değişiklikler için lead time | İlk commit'ten başarılı üretim dağıtımına kadar geçen süre (medyanı ve 90. yüzdelik dilimi raporlayın) | 2.10 |
| Değişiklik başarısızlık oranı | (Arızaya yol açan dağıtımlar) / (Toplam dağıtım) x %100 | 2.10 |
| Başarısız dağıtımdan kurtarma süresi | Arızanın tespitinden hizmetin gerçek anlamda geri gelmesine kadar geçen süre | 2.10 |

## Geliştirici deneyimi (Bölüm 3)

| Metrik | Formül | Konu |
| --- | --- | --- |
| Odak süresi | Takvim verilerinden, haftada kesintisiz iki saat ve üzeri blokların sayısı ve süresi | 3.6 |
| Yanıt oranı | (Alınan anket yanıtları) / (Gönderilen anket davetleri) x %100 | 3.7 |

## Kod ve kalite (Bölüm 4)

| Metrik | Formül | Konu |
| --- | --- | --- |
| Döngüsel karmaşıklık | Kontrol akışındaki bağımsız yollar (McCabe'e göre kenarlar − düğümler + 2) | 4.1 |
| Test kapsamı | (Testlerce çalıştırılan satırlar/dallar) / (Toplam satır/dal) x %100 | 4.2 |
| Mutant öldürme oranı | (Test paketinin öldürdüğü mutantlar) / (Sokulan toplam mutant) x %100 | 4.2 |
| Kod churn'ü | Bir zaman penceresinde dosya başına eklenen + değiştirilen + silinen satırlar | 4.3 |
| Sıcak nokta puanı | Churn x Karmaşıklık, dosya başına sıralanmış | 4.3 |
| Borç taşıma maliyeti | Bir öğeyi düzeltmemenin tahmini süregelen maliyeti (daha yavaş ilgili iş, yüksek kusur riski) | 4.5 |

## Ürün ve iş (Bölüm 5)

| Metrik | Formül | Konu |
| --- | --- | --- |
| Kaçan kusur oranı | (Önem derecesiyle ağırlıklandırılmış kaçan kusurlar) / (Teslimat ya da zaman birimi) | 5.1 |
| İlk benimseme | (Özelliği en az bir kez deneyen kullanıcılar) / (Hedef kitle) x %100 | 5.2 |
| Kalıcı benimseme | (N hafta sonra özelliği hâlâ kullanan kullanıcılar) / (Başlangıçta deneyen kullanıcılar) x %100 | 5.2 |
| Birim maliyet | Toplam maliyet (insan + altyapı + araçlar) / Anlamlı birim (müşteri, işlem) | 5.4 |
| ROI | (Toplam fayda − Toplam sahip olma maliyeti) / Toplam sahip olma maliyeti, aralık olarak sunulur | 5.5 |

## Güvenilirlik, operasyonlar ve güvenlik (Bölüm 6)

| Metrik | Formül | Konu |
| --- | --- | --- |
| Hata bütçesi | (1 − SLO hedefi) x Zaman penceresi (örn. 30 günün %0,1'i ≈ 43 dakika) | 6.1 |
| Hata bütçesi tüketim hızı | Verilen bir pencerede tüketilen hata bütçesi / Ayrılan hata bütçesi | 6.1 |
| MTTD | Olayın başlangıcından tespitine kadar geçen süre | 6.2 |
| MTTA | Olay bildiriminden onaylanmasına kadar geçen süre | 6.2 |
| MTTR (olay) | Onaydan hizmetin gerçek anlamda geri gelmesine kadar geçen süre | 6.2 |
| Nöbet çağrısı dağılımı | Kayan bir pencerede kişi başına alınan çağrılar (ekip ortalaması değil) | 6.3 |
| Güvenlik açığı giderme süresi | Keşiften gerçek giderilmeye kadar geçen süre, önem derecesine göre izlenir | 6.4 |

## Bu formülleri kullanma notları

- **Hız ya da çıktı formüllerini daima korkuluğuyla eşleştirin** (konu 1.2):
  değişiklik başarısızlık oranını dağıtım sıklığı ve lead time ile; kaçan
  kusur oranını teslimat hızıyla; hata bütçesi tüketimini dağıtım etkinliğiyle.
- **Zamana dayalı formüllerde ortalama değil, medyan ve yüzdelik dilim
  kullanın** (konu 1.6), formül açıkça ortalama istemiyorsa.
- **Her formül, matematiksel tanımının yanında belgelenmiş bir kaynak sistem ve
  toplama yöntemi gerektirir** (konu 1.5); aynı formülü farklı kaynaklardan
  hesaplayan iki ekip karşılaştırılabilir sayılar üretmez.
- **Önem derecesi ağırlıklandırması yukarıdaki her formülde açıkça
  gösterilmemiştir**, ama "önem derecesiyle ağırlıklandırılmış" ifadesinin
  geçtiği her yerde uygulanır; tam sınıflandırma şeması için ilgili konuya
  bakın.
