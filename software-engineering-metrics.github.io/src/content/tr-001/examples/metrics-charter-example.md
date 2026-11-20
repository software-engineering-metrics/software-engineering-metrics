# Örnek: bir ödeme platformu ekibi için metrik tüzüğü

Bir metrik tüzüğünün çalışılmış örneği; [1.4 konusunda, Metrik yönetişimi ve sahiplik](../chapters/01-04-metrik-yonetisimi-ve-sahiplik.md)
anlatılan türden tek sayfalık belge. Önemli olan biçimdir: belirtilmiş bir amaç, açık
bir hedef dışı kapsam, adı konmuş sahipler ve bir gözden geçirme ritmi. Bu kadar
kısa bir tüzük, dosyalanmak için değil okunmak içindir.

- **Ekip:** Ödeme platformu
- **Sahip:** Platform mühendisliği yöneticisi
- **Gözden geçirme:** Çeyreklik, platform gözden geçirmesinde

## Amaç

Bu tüzük, ödeme platformu ekibinin kendi teslimatı ve güvenilirliği hakkında izlediği
metrikleri yönetir. Ekibin içindeki ve dışındaki herkesin neyin, neden ölçüldüğünü ve
ne için kullanılmadığını görebilmesi için vardır.

## Neyi izliyoruz

| Metrik | Doğruluk kaynağı | Sahip |
| --- | --- | --- |
| Dağıtım sıklığı | CI/CD boru hattı | Platform lideri |
| Değişiklikler için lead time | Git artı dağıtım boru hattı | Platform lideri |
| Değişiklik başarısızlık oranı | Dağıtıma göre etiketlenmiş olay izleyici | Nöbet lideri |
| Başarısız dağıtımdan kurtarma süresi | Olay izleyici | Nöbet lideri |
| P99 API gecikmesi (SLI) | Gözlemlenebilirlik platformu | SRE lideri |
| Hata bütçesi tüketimi | Gözlemlenebilirlik platformu | SRE lideri |

## Hedef dışı kapsam

Bu metrikler, tek tek ya da birlikte, mühendisleri sıralamak, performans
değerlendirmelerini yapmak veya kapsamı, kadro durumunu ve sistem olgunluğunu da
karşılaştırmadan bu ekibi başka bir ekibin yol haritasıyla kıyaslamak için asla
kullanılmaz. Yukarıda belirtilen amacın dışındaki her kullanım, mühendislik
direktörünün ve ekibin kendisinin onayını gerektirir.

## Korkuluklar

Teşvik taşıyan yukarıdaki her metrik bir korkuluk ile eşleştirilir. Değişiklikler için
lead time, değişiklik başarısızlık oranıyla birlikte izlenir; böylece bir ekip daha
riskli değişiklikler göndererek hız sayısını iyileştiremez. Dağıtım sıklığı da aynı
nedenle hata bütçesi tüketimiyle birlikte izlenir.

## Gözden geçirme ritmi

Ekip bu tüzüğü her çeyrekte gözden geçirir. Art arda iki çeyrek boyunca hiçbir kararı
değiştirmemiş bir metrik, emekliye ayrılmak için adaydır.
