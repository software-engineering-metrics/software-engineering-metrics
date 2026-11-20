# 6.0 Bölüm 6'ya giriş: Güvenilirlik, operasyon ve güvenlik metrikleri

Bölüm 2, bir değişikliğin commit'ten üretime nasıl ulaştığını ele almıştı. Bu
bölüm ise değişiklik orada çalışmaya başladıktan sonra ne olduğunu anlatıyor:
süresiz olarak, ekibin tam olarak kontrol edemediği gerçek koşullar altında.
Güvenilirlik, operasyon ve güvenlik metrikleri, yazılım mühendisliğinin
vaatlerinin süregelen gerçeklikle buluştuğu yerdir. Soru "bu dağıtım başarılı
oldu mu" değil, "bu sistem gecenin her saatinde, yük altında, saldırı altında
ve yalnızca bir sonraki olay için değil yıllarca sürdürülebilir olması gereken
bir nöbet düzeninin baskısı altında çalışmaya devam ediyor mu" sorusudur.

Bu bölümün dört konusu bilinçli bir akışı izler. Hizmet seviyesi göstergeleri
ve hedefleri (konu 6.1), bu bölümdeki her şeyin dayandığı sözlüğü ve hedef
koyma disiplinini kurar. Olay metrikleri (konu 6.2), o hedef kaçırıldığında
olanları ölçer. Nöbet ve kapasite metrikleri (konu 6.3), hedefi tutturmanın
insani ve altyapısal maliyetini ölçer. Güvenlik ve açık yönetimi metrikleri
(konu 6.4) ise aynı güvenilirlik disiplinini farklı ama yakından ilişkili bir
riske taşır: "bu kendiliğinden bozulur mu" sorusunu değil, "biri bunu bilerek
bozar mı" sorusunu. Dört konu da bu kitabın temel disiplinini paylaşır:
metriği adlandırın, nasıl manipüle edildiğini adlandırın ve bu manipülasyonu
yakalayan korkuluğu onunla eşleştirin.

Büyük ekipler için bu bölümün metrikleri, mühendislik vaatlerinin sözleşmeye
bağlandığı, kamu bağlamlarında ise bazen yasal bağlayıcılık kazandığı yerdir.
Kurumsal şirketler, konu 6.1'in tanıttığı metrikler üzerinden, kaçırıldığında
gerçek mali cezalar doğuran hizmet seviyesi sözleşmeleri yazar. Kamu kurumları
ise bir güvenilirlik ya da güvenlik arızasının sonuçlarının tek bir şirketin
bilançosunun çok ötesine geçtiği kritik kamu altyapısını işletir. Bu bölüm
boyunca bu ağırlık ciddiye alınır.

## Bu bölümdeki konular

- **6.1 Hizmet seviyesi göstergeleri, hedefleri ve hata bütçeleri:** Site
  güvenilirliği mühendisliğinin tamamının dayandığı sözlük ve hedef koyma
  disiplini; ayrıca hata bütçesinin güvenilirliği ulaşılmaz bir mutlak
  olmaktan çıkarıp harcanabilir ve yönetilebilir bir kaynağa nasıl
  dönüştürdüğü.
- **6.2 Olay metrikleri: tespit, müdahale ve toparlanma:** Bir kurumun bir
  arızayı ne kadar çabuk fark ettiğini, ona müdahale ettiğini ve çözdüğünü
  ölçmek; bu ölçümü dürüst tutan suçlamasız (blameless) disiplin.
- **6.3 Nöbet, kapasite ve operasyonel yük metrikleri:** Güvenilirliği
  sürdürmenin insani ve altyapısal maliyeti ve sürdürülemez bir nöbet yükünün
  neden sonunda kendisi bir güvenilirlik sorunu olarak ortaya çıktığı.
- **6.4 Güvenlik ve açık yönetimi metrikleri:** Aynı disiplinli, korkuluk
  eşleştirmeli yaklaşımın güvenlik riskine taşınması; açığın keşfinden
  giderilmesine kadar.

## Bu konular birbiriyle nasıl ilişkilidir

Konu 6.1, bu bölümdeki sonraki her konunun üzerine kurulduğu temeli atar. Net
bir hizmet seviyesi hedefi olmadan "bu olay ne kadar kötüydü" (konu 6.2) ve
"nöbet yükümüz sürdürülebilir mi" (konu 6.3) sorularının karşılaştırılacağı
ortak bir referans noktası olmaz. Konu 6.2'nin olay metrikleri, gerçek anlamda,
konu 6.1'in tanıttığı hata bütçesi harcamasının kaydıdır. Konu 6.3, bu
harcamayı bütçe içinde tutmaktan sorumlu insan sisteminin sürdürülebilirliğini
ölçer. Konu 6.4 ise aynı hedef ve bütçe düşüncesini, ölçülmediğinde genellikle
yalnızca olaydan sonra, tepkisel biçimde ilgi gören bir güvenlik duruşuna,
proaktif olarak uygular.

Bu bölüm doğrudan Bölüm 2'ye geri bağlanır: DORA'nın değişiklik başarısızlık
oranı ve başarısız dağıtımdan kurtarma süresi (ikisi de konu 2.10'da ele
alınır), sırasıyla bu bölümün olay metrikleri için öncü bir gösterge ve bu
metriklerin bir örneğidir. Bölüm 8'e de ileriye doğru bağlanır: oradaki pano ve
program olgunluğu rehberi, soyut bir hedefi (güvenilirlik, güvenlik) bir ekibin
günlük olarak gerçekten yönetebileceği somut, izlenebilir, mutlak olmayan bir
hedefe dönüştürmenin işlenmiş örneği olarak bu bölümün hata bütçesi modelinden
yoğun biçimde yararlanır.
