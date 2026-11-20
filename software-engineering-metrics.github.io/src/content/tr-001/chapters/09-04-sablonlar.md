# 9.4 Şablonlar

Yinelenen belgeler için kopyala-yapıştır şablonlar. İlk ikisinin işlenmiş,
doldurulmuş örnekleri [`docs/examples/`](../examples/index.md) içinde yer alır.

## Metrik tüzüğü şablonu

```markdown
# Metrik tüzüğü: [ekip ya da metrik kümesi adı]

- **Ekip:** [sahip ekip]
- **Sahibi:** [adlandırılmış kişi ya da rol]
- **Gözden geçirme:** [ritim, örn. üç ayda bir]

## Amaç

[Bir ya da iki cümle: bu tüzük neyi yönetir ve neden.]

## Neyi izliyoruz

| Metrik | Doğruluk kaynağı | Sahibi |
| --- | --- | --- |
| [metrik] | [sistem] | [adlandırılmış sahip] |

## Hedef dışı olanlar

[Bu metriklerin ne için kullanılmadığının açık beyanı, örn. bireysel
performans değerlendirmesi, bağlamsız ekipler arası sıralama.]

## Korkuluklar

[Teşvik edilen her metrik için eşlenik korkuluğunu ve hangi manipülasyon
örüntüsünü yakaladığını belirtin.]

## İnceleme ritmi

[Bu tüzüğün ne zaman ve nasıl yeniden ele alındığı; bir metriğin emekliye
ayrılmasını neyin tetiklediği.]
```

## Gösterge paneli şartname şablonu

```markdown
# Gösterge paneli şartnamesi: [gösterge paneli adı]

## Hedef kitle

[Bu gösterge panelinin kimin için olduğu ve hangi kararı bilgilendirdiği.
Bireysel değerlendirme için olmadığını açıkça belirtin.]

## Kutucuklar (görüntülenme sırasıyla)

1. **[Metrik adı]**, [zaman penceresi], [grafik türü]. [Varsa görselleştirme
   notları: eksen kuralları, açıklamalar.]
2. ...

## Görselleştirme kuralları

- Eksenler, kutucukta belgelenen istisna dışında, aksi belirtilmedikçe
  sıfırdan başlar.
- [Projeye özgü diğer dürüstlük kuralları.]

## Yenileme ritmi

[Her kutucuğun ne sıklıkla ve hangi kaynaktan güncellendiği.]

## Bu gösterge panelinin bilerek dışarıda bıraktıkları

[Kasıtlı olarak dışarıda bırakılan her şeyi ve nedenini belirtin, örn.
bireysel aktivite sayıları.]
```

## Metrik inceleme toplantısı gündem şablonu

```markdown
# Metrik incelemesi: [tarih]

## Katılımcılar

[İsimler ve roller]

## İncelenen metrikler

Her metrik için:
- Güncel okuma ve eğilim
- Normal değişimin dışındaki her hareket (konu 1.6)
- Varsa eşlenik korkuluğun durumu
- Bu okumanın bilgilendirdiği karar, varsa

## Önerilen yeni metrikler

[Her birini yeni metrik inceleme kontrol listesinden geçirin, konu 9.3.]

## Emekliye ayrılması düşünülen metrikler

[Hangi metrikler son iki döngüde bir karara bilgi sağlamadı?]

## Aksiyon maddeleri

| Madde | Sahibi | Son tarih |
| --- | --- | --- |
| | | |
```

## Suçlamasız postmortem şablonu

```markdown
# Postmortem: [olay adı], [tarih]

## Özet

[Bir paragraf: ne oldu, kullanıcı etkisi, süre.]

## Zaman çizelgesi

- Tespit: [zaman, nasıl tespit edildi]
- Onay: [zaman, kim yanıt verdi]
- Çözüm: [zaman, neyin düzelttiği]

## Önem derecesi

[Belgelenmiş ölçütlere göre sınıflandırma, konu 6.2.]

## Kök neden

[Bunun olmasına neyin izin verdiği; bireysel değil, sistem sorusu olarak
çerçevelenmiş.]

## İyi giden şeyler

[Müdahalede işe yarayan belirli şeyler.]

## Aksiyon maddeleri

| Madde | Sahibi | Son tarih |
| --- | --- | --- |
| | | |

## Takip

[Aksiyon maddelerinin, bir sonraki inceleme döngüsüne göre tamamlanana dek
izlendiğinin teyidi.]
```

## ROI gerekçesi şablonu

```markdown
# ROI gerekçesi: [girişim adı]

## Maliyet (toplam sahip olma maliyeti, konu 5.5)

- Başlangıç: [geliştirme maliyeti]
- Süregelen: [bakım, altyapı, destek; yıllık]
- Fırsat maliyeti: [bu kapasitenin başka neler yapabileceği]

## Fayda (belgelenmiş kanıt, konular 5.1-5.3)

- [Fayda 1], kanıtı: [veri kaynağı]
- [Fayda 2], kanıtı: [veri kaynağı]

## Aralık ve varsayımlar

- Temkinli senaryo: [rakam]
- İyimser senaryo: [rakam]
- Aralığı belirleyen temel varsayım: [adını yazın]

## Göz önüne alınan ve elenen karıştırıcılar

[Öngörülen faydayı başka neyin açıklayabileceği ve neden elendiği ya da hesaba
katıldığı.]

## Tamamlanma sonrası kontrol (girişim bittikten sonra doldurun)

- Gerçekleşen sonuç: [rakam]
- Öngörülen aralıkla karşılaştırma: [üstünde / içinde / altında]
- Bunun bir sonraki tahmin için bize öğrettiği: [not]
```
