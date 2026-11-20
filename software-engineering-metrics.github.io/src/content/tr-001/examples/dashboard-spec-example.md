# Örnek: bir teslimat metrikleri gösterge paneli için pano belirtimi

[8.1 konusunu, Mühendislik metrikleri gösterge paneli tasarlamak](../chapters/08-01-muhendislik-metrikleri-panosu-tasarlamak.md)
izleyen, çalışılmış bir pano belirtimi. Önemli olan biçimdir: adı konmuş bir hedef
kitle, az sayıda karo, dürüst bir görselleştirme standardı ve belirtilmiş bir
yenileme ritmi.

## Hedef kitle

Mühendislik yönetimi ve platform ekibi; iki haftada bir yapılan teslimat
gözden geçirmesinde incelenir. Bireysel performans değerlendirmesi için
tasarlanmamıştır.

## Karolar (gösterim sırasıyla)

1. **Dağıtım sıklığı**, son 4 hafta, ekibe göre. Çizgi grafik, haftalık kovalar,
   eksen sıfırdan başlar.
2. **Değişiklikler için lead time**, medyan ve 90. yüzdelik, son 4 hafta.
   Yalnızca medyanın değil, her iki serinin de gösterildiği çubuk grafik.
3. **Değişiklik başarısızlık oranı**, son 4 hafta; karodan, ekibin üzerinde
   anlaştığı "başarısızlık" tanımına bağlantı verilir.
4. **Başarısız dağıtımdan kurtarma süresi**, medyan, son 4 hafta.
5. **Kalan hata bütçesi**, mevcut çeyrek, hizmet başına, yüzde olarak.

## Görselleştirme kuralları

- Her eğilim grafiği, tek bir anlık görüntü değil, en az sekiz veri noktası gösterir.
- Karoda belgelenmiş bir istisna belirtilmedikçe eksenler sıfırdan başlar.
- Dağıtımlar, olaylar ve tatiller zaman çizelgesinde işaretlenir; böylece okur gerçek
  bir kaymayı gürültüden ayırabilir.
- Çift eksen, 3 boyutlu efekt ve seçilmiş tarih aralığı yok.

## Yenileme ritmi

Boru hattından beslenen karolar (dağıtım sıklığı, lead time) saatlik yenilenir.
Olaylardan beslenen karolar (değişiklik başarısızlık oranı, kurtarma süresi) olay
sonrası inceleme kapandığında yenilenir. Pano kendi son yenilenme zamanını belirtir.

## Bu panonun bilerek dışarıda bıraktıkları

Bireysel commit sayıları, bireysel pull request sayıları ve kod satırı sayısı.
Bunlar, manipüle edildiği ve sonuç yerine çabayı ölçtüğü iyi belgelenmiş etkinlik
metrikleridir (3.4 konusu).
