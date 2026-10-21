# 6.2 Chỉ số sự cố: phát hiện, ứng phó và khôi phục

## Tổng quan và động lực

Chủ đề này đo điều xảy ra khi ngân sách lỗi từ chủ đề 6.1 bị chi tiêu qua một thất bại thật: một **sự cố (incident)**, một sự kiện ngoài
kế hoạch làm suy giảm hoặc gián đoạn một dịch vụ. Bốn chỉ số tạo nên vốn từ tiêu chuẩn để đo một tổ chức xử lý việc này tốt đến đâu:
**thời gian trung bình để phát hiện (MTTD)**, bao lâu trước khi tổ chức nhận ra có gì đó sai; **thời gian trung bình để tiếp nhận
(MTTA)**, bao lâu trước khi ai đó nhận trách nhiệm ứng phó; **thời gian trung bình để giải quyết** hoặc **khôi phục (MTTR)**, bao lâu cho
đến khi dịch vụ được khôi phục, cùng khái niệm mà chủ đề 2.10 đã bàn riêng cho các thất bại do triển khai, giờ được khái quát cho mọi
sự cố bất kể nguyên nhân; và **tần suất sự cố**, đơn giản là các sự cố xảy ra thường xuyên đến đâu.

Mối quan tâm trung tâm của chủ đề này, vang lại cách chủ đề 2.10 xử lý tỷ lệ thay đổi thất bại, là các con số này chỉ đáng tin bằng văn
hóa tổ chức xung quanh việc báo cáo và phân loại sự cố một cách trung thực. Một đội sợ bị đổ lỗi cho một sự cố có mọi động cơ để báo
cáo thiếu, trì hoãn tiếp nhận để tránh bị "tính giờ", hay phân loại một sự kiện nghiêm trọng là nhỏ để bảo vệ chỉ số của chính mình.
Thực hành **hậu kiểm [không đổ lỗi](https://en.wikipedia.org/wiki/Just_culture)**, do các tổ chức như Etsy đi tiên phong và được chính
thức hóa trong tài liệu SRE của Google, tồn tại chính để loại bỏ động cơ đó, và chủ đề này coi nó là điều kiện tiên quyết cho dữ liệu
sự cố đáng tin, không phải một nét văn hóa tùy chọn tốt đẹp phủ lên các chỉ số.

Với các đội lớn, các chỉ số sự cố cho thấy năng lực phát hiện và ứng phó của một tổ chức, công cụ khôi phục ngược của chủ đề 2.10 cùng
các khoản đầu tư khác, có thực sự hoạt động trong các điều kiện thật, đa dạng hay không, không chỉ kịch bản thất bại do triển khai cụ thể
mà chủ đề đó bàn. Các tổ chức doanh nghiệp và chính phủ vận hành hạ tầng quan trọng dựa vào các chỉ số này cả nội bộ, để thúc đẩy cải
thiện vận hành thật, lẫn bên ngoài, để chứng minh với khách hàng, cơ quan quản lý hay công chúng rằng sự cố được xử lý thành thạo và cải
thiện theo thời gian.

## Các nguyên tắc chính

- **Văn hóa không đổ lỗi là điều kiện tiên quyết cho dữ liệu sự cố đáng tin**, không phải một sự bổ sung tùy chọn; nỗi sợ bị đổ lỗi làm
  hỏng báo cáo, tốc độ tiếp nhận và phân loại mức nghiêm trọng như nhau.
- **Phát hiện, tiếp nhận và giải quyết là các giai đoạn riêng biệt với các cách sửa riêng biệt.** Một thời gian khôi phục tổng thể chậm
  có thể che giấu những vấn đề nền rất khác nhau tùy giai đoạn nào thực sự chậm.
- **Tần suất sự cố và MTTR là một tín hiệu ghép đôi**, tương tự tỷ lệ thay đổi thất bại và thời gian khôi phục của DORA (chủ đề 2.10):
  riêng cái nào cũng không kể trọn câu chuyện.
- **Phân loại mức nghiêm trọng cần cùng độ chặt chẽ như phân loại lỗi lọt** (chủ đề 5.1): tiêu chí nhất quán, được ghi chép, không phải
  phán đoán tùy hứng.
- **Giá trị của một cuộc hậu kiểm nằm ở việc học hỏi mang tính hệ thống, không phải ở việc tạo ra một con số.** Chỉ số là sản phẩm phụ
  của thực hành tốt, không phải mục tiêu của nó.

## Khuyến nghị

### Phân rã thời gian ứng phó sự cố thành các giai đoạn riêng biệt

Hãy đo và báo cáo riêng thời gian phát hiện (từ lúc thất bại thực sự bắt đầu đến khi ai đó nhận ra), thời gian tiếp nhận (từ lúc được
thông báo đến khi ai đó nhận trách nhiệm) và thời gian giải quyết (từ lúc nhận trách nhiệm đến khi khôi phục thật), thay vì chỉ một tổng
gộp duy nhất. Mỗi giai đoạn chỉ về một cách sửa khác nhau: phát hiện chậm chỉ về khoảng trống giám sát và cảnh báo, tiếp nhận chậm chỉ về
vấn đề quy trình trực ca hay leo thang, và giải quyết chậm chỉ về khoảng trống công cụ, sổ tay vận hành hay năng lực chẩn đoán (chủ đề
2.10 bàn điều này riêng cho các thất bại do triển khai).

### Xây dựng và bảo vệ một quy trình hậu kiểm thực sự không đổ lỗi

Một **cuộc hậu kiểm không đổ lỗi** điều tra điều gì đã xảy ra và vì sao hệ thống cho phép nó xảy ra, tường minh tránh quy lỗi cho một cá
nhân về một sai lầm mà bất kỳ người hợp lý nào trong cùng hoàn cảnh, với cùng thông tin, cũng có thể mắc. Hãy chủ động bảo vệ kỷ luật
này: lãnh đạo làm gương các phản ứng không trừng phạt với sự cố, một chính sách bằng văn bản tường minh, và thói quen hỏi "điều gì ở hệ
thống của chúng ta cho phép điều này" thay vì "ai đã làm điều này" đều là những khoản đầu tư cần thiết, liên tục, không phải một tuyên bố
chính sách một lần.

### Phân loại mức nghiêm trọng bằng tiêu chí nhất quán, được ghi chép, được kiểm toán

Hãy áp dụng cùng kỷ luật mà chủ đề 5.1 khuyến nghị cho lỗi lọt vào phân loại mức nghiêm trọng của sự cố: một thang cố định, được ghi chép
dựa trên tác động thực tế lên khách hàng hay kinh doanh, áp dụng nhất quán giữa các đội, được kiểm toán định kỳ để phát hiện trôi dạt.
Phân loại không nhất quán, đội dễ dãi, đội nghiêm khắc, khiến dữ liệu sự cố toàn tổ chức không đáng tin để so sánh, cũng như dữ liệu lỗi
được phân loại không nhất quán.

### Theo dõi tần suất sự cố và MTTR cùng nhau, không bao giờ riêng lẻ

Một MTTR cải thiện cùng với tần suất sự cố tăng có thể cho thấy một đội giỏi chữa cháy hơn trong khi độ tin cậy hệ thống nền thực ra suy
giảm; một tần suất sự cố giảm cùng với MTTR xấu đi có thể cho thấy các thất bại hiếm hơn nhưng nghiêm trọng hơn, khó chẩn đoán hơn thay
thế các thất bại nhỏ, thường xuyên. Hãy xem xét cả hai cùng nhau, phản chiếu đúng kỷ luật ghép đôi tốc độ-và-ổn định từ các chỉ số DORA
của Phần 2, để có một bức tranh tổng hợp trung thực.

### Trích xuất và theo dõi các hạng mục hành động mang tính hệ thống từ các cuộc hậu kiểm, không chỉ các chỉ số

Giá trị thật của quy trình hậu kiểm là các hạng mục hành động cụ thể, mang tính hệ thống mà nó tạo ra: một cảnh báo còn thiếu được thêm,
một sổ tay vận hành được cải thiện, một điểm hỏng đơn lẻ được loại bỏ. Hãy theo dõi các hạng mục hành động này đến khi hoàn thành với
cùng kỷ luật như backlog nợ kỹ thuật từ chủ đề 4.5, vì một cuộc hậu kiểm tạo ra hiểu biết nhưng không có hành động tiếp theo là lãng phí
việc học hỏi của tổ chức mà quy trình này nhằm nắm bắt.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Một chỉ số thời gian ứng phó sự cố gộp, duy nhất | Đơn giản để báo cáo | Che giấu giai đoạn cụ thể nào, phát hiện, tiếp nhận, giải quyết, là vấn đề thật |
| Chỉ số sự cố phân rã theo giai đoạn | Chẩn đoán được, chỉ thẳng đến cách sửa đúng | Cần đo đạc cẩn thận hơn từng bước chuyển giai đoạn |
| Đánh giá sự cố hướng đổ lỗi | Cảm giác có trách nhiệm, thỏa mãn mong muốn quy trách nhiệm | Làm hỏng sự trung thực báo cáo về sau và hiếm khi sửa nguyên nhân hệ thống thật |
| Thực hành hậu kiểm không đổ lỗi | Tạo dữ liệu trung thực và các bản sửa hệ thống thật | Cần đầu tư văn hóa bền bỉ và kỷ luật lãnh đạo để duy trì |

Sự căng thẳng trung tâm là **sức hấp dẫn của trách nhiệm cá nhân so với nhu cầu thực tế về báo cáo trung thực**. Đổ lỗi cho một cá nhân
sau sự cố có thể cảm giác thỏa mãn và trông như lãnh đạo quyết đoán, nhưng nó làm hỏng dữ liệu của mọi sự cố sau một cách chắc chắn, vì
mọi người báo cáo thiếu, trì hoãn tiếp nhận, hay phân loại sai mức nghiêm trọng một khi họ sợ hậu quả cá nhân. Hãy giải quyết sự căng
thẳng nghiêng về thực hành không đổ lỗi một cách có chủ đích và nhất quán, hiểu rằng trách nhiệm thật đến từ việc sửa hệ thống đã cho
phép một thất bại, không phải từ việc trừng phạt cá nhân tình cờ có mặt khi nó xảy ra.

## Câu hỏi để thảo luận với đội của bạn

1. **Chúng ta có phân rã thời gian ứng phó sự cố thành các giai đoạn phát hiện, tiếp nhận và giải quyết, hay chỉ theo dõi một con số gộp
   duy nhất?** Nếu chỉ có con số gộp, hãy chọn một sự cố đáng kể gần đây và thử dựng lại hồi cố bảng phân rã giai đoạn để xem nó sẽ cho
   thấy điều gì.

2. **Đội của chúng ta có thực sự tin quy trình hậu kiểm của mình không đổ lỗi, hay nỗi sợ hậu quả vẫn định hình cách sự cố được báo cáo
   và thảo luận?** Hãy hỏi điều này trực tiếp và thành thật; một chính sách không đổ lỗi được tuyên bố nhưng không thực sự được sống thì
   không tạo ra dữ liệu đáng tin.

3. **Hai đội khác nhau có phân loại mức nghiêm trọng của cùng một sự cố theo cùng cách không?** Hãy chọn một sự cố thật, mơ hồ trong quá
   khứ và nhờ đại diện các đội khác nhau phân loại độc lập, rồi so sánh kết quả.

4. **Chúng ta có xem xét tần suất sự cố và MTTR cùng nhau, hay một trong hai nhận được nhiều sự chú ý hơn?** Hãy kiểm tra thực hành báo
   cáo và các buổi xem xét thực tế của bạn về sự ghép đôi này, phản chiếu cùng kỷ luật mà chủ đề 2.10 khuyến nghị cho các chỉ số ổn định
   DORA.

5. **Bao nhiêu phần trăm các hạng mục hành động hậu kiểm của chúng ta trong sáu tháng qua đã thực sự hoàn thành?** Nếu hiện bạn không
   theo dõi điều này, khoảng trống đó đáng được gọi tên; một quy trình hậu kiểm có tỷ lệ hoàn thành hạng mục hành động thấp là đang tạo
   ra hiểu biết mà không có hành động tiếp theo.

6. **Nỗi sợ bị đổ lỗi có bao giờ khiến ai đó trì hoãn báo cáo hay tiếp nhận một sự cố không?** Đây là một câu hỏi khó chịu nhưng quan
   trọng; một câu trả lời thành thật "có, và đây là chuyện đã xảy ra" có giá trị cho sức khỏe quy trình sự cố của bạn hơn nhiều so với
   một câu "không" theo phản xạ.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Ứng phó sự cố thường không chính thức do bắt buộc với một đội nhỏ, và phân rã giai đoạn chính thức có thể không cần
thiết lúc đầu. Thói quen đáng áp dụng sớm là chuẩn mực thảo luận không đổ lỗi từ sự cố đầu tiên, vì thói quen văn hóa đặt ra sớm dễ duy
trì hơn nhiều so với bổ sung sau khi một mẫu hình dễ đổ lỗi đã hình thành.

**Doanh nghiệp nhỏ.** Một nhật ký sự cố chung đơn giản, dù không chính thức, với phân loại mức nghiêm trọng cơ bản và một buổi nhìn lại
ngắn không đổ lỗi cho bất cứ điều gì đáng kể, nắm được phần lớn giá trị của chủ đề này mà không cần công cụ phức tạp hay nền tảng quản lý
sự cố chuyên dụng.

**Doanh nghiệp lớn.** Phân loại mức nghiêm trọng nhất quán và văn hóa không đổ lỗi thật sự, bền bỉ đều khó duy trì hơn ở quy mô lớn, và
cả hai đều thiết yếu cho dữ liệu sự cố đáng tin, so sánh được trên hàng chục đội. Hãy đầu tư vào tiêu chí phân loại được ghi chép, kiểm
toán định kỳ và việc lãnh đạo chủ động làm gương phản ứng không đổ lỗi, vì sự trôi dạt văn hóa về phía đổ lỗi có xu hướng len vào dần
dần nếu không có áp lực đối trọng chủ đích, liên tục.

**Chính phủ.** Các sự cố ảnh hưởng dịch vụ công hay hạ tầng quan trọng thường chịu sự soi xét bên ngoài, sự chú ý của truyền thông, hay
điều tra chính thức, tạo ra áp lực mạnh hướng tới việc tìm người đổ lỗi, điều có thể trực tiếp làm suy yếu thực hành không đổ lỗi nội bộ
nếu không được quản lý chủ động. Hãy duy trì kỷ luật không đổ lỗi nội bộ rõ ràng cho việc học hỏi hệ thống thật, tách biệt với bất kỳ
quy trình trách nhiệm giải trình bên ngoài nào có thể theo sau một sự cố nghiêm trọng, và truyền đạt rõ sự phân biệt đó cho nhân viên.

## Ví dụ

**Doanh nghiệp lớn.** Văn hóa kỹ thuật của một công ty thanh toán trong nhiều năm đã không chính thức coi sự cố là thứ nên giảm thiểu việc
tiếp nhận nhanh để tránh trông như người chịu trách nhiệm, dẫn đến thời gian phát hiện và tiếp nhận kém liên tục mà lãnh đạo ban đầu cho
là do công cụ giám sát không đủ. Một sự chuyển dịch văn hóa sang các cuộc hậu kiểm thực sự không đổ lỗi, gồm cả việc lãnh đạo công khai
và cụ thể khen việc tiếp nhận sự cố nhanh, trung thực thay vì chỉ khen giải quyết nhanh, đã tạo ra cải thiện đo được ở cả thời gian phát
hiện lẫn tiếp nhận trong hai quý, cho thấy nút thắt ban đầu là văn hóa, nỗi sợ bị đổ lỗi, hơn là kỹ thuật, công cụ không đủ, như giả định
lúc đầu.

**Chính phủ.** Trung tâm vận hành của một cơ quan giao thông công cộng từ trước đến nay phân loại gần như mọi gián đoạn dịch vụ là "nhỏ"
trong nhật ký sự cố nội bộ, một mẫu hình mà một giám đốc an toàn mới thấy đáng ngờ trước những lời phàn nàn không chính thức, dai dẳng từ
nhân viên hiện trường về các vấn đề nghiêm trọng tái diễn. Một cuộc điều tra cho thấy phân loại "nhỏ" tránh được một quy trình báo cáo
chính thức nặng nề bắt buộc với các mức nghiêm trọng cao hơn, tạo ra một động cơ vô tình để phân loại thấp. Cơ quan đã đơn giản hóa các
yêu cầu báo cáo chính thức cho mọi mức nghiêm trọng và tường minh bảo vệ nhân viên khỏi bị đổ lỗi khi báo cáo mức nghiêm trọng trung thực,
và dữ liệu sự cố sau đó cho thấy tỷ lệ các gián đoạn thực sự đáng kể chính xác hơn, và cao hơn đáng kể, cuối cùng cho lãnh đạo một bức
tranh trung thực để ưu tiên đầu tư hạ tầng.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của các chỉ số sự cố thực sự không đổ lỗi, được phân loại tốt, phân rã theo giai đoạn là dữ liệu trung thực thực sự thúc đẩy cải
thiện hệ thống, thay vì một bức tranh an ủi nhưng sai do báo cáo thiếu hay phân loại sai vì sợ hãi. Ví dụ công ty thanh toán ở trên cho
thấy cụ thể điều này: một bản sửa văn hóa, không phải khoản đầu tư công cụ, đã giải quyết điều mà lãnh đạo chẩn đoán nhầm là vấn đề phát
hiện kỹ thuật.

Tổng chi phí sở hữu chủ yếu là đầu tư văn hóa và quy trình: sự cam kết bền bỉ của lãnh đạo với thực hành không đổ lỗi, tiêu chí phân loại
mức nghiêm trọng được ghi chép và kiểm toán, và kỷ luật theo dõi các hạng mục hành động hậu kiểm đến khi hoàn thành. Khoản đầu tư đó tốn
ít hơn phương án thay thế, một chương trình chỉ số sự cố tạo ra dữ liệu sai một cách tự tin vì nỗi sợ đã làm hỏng mọi đầu vào của nó.

## Phản mẫu và cạm bẫy

- **Đánh giá sự cố hướng đổ lỗi:** làm hỏng sự trung thực báo cáo, tốc độ tiếp nhận và phân loại mức nghiêm trọng cho mọi sự cố về sau.
- **Chỉ theo dõi một con số thời gian ứng phó gộp:** che giấu giai đoạn cụ thể nào, phát hiện, tiếp nhận, giải quyết, thực sự là vấn đề.
- **Phân loại mức nghiêm trọng không nhất quán giữa các đội:** khiến dữ liệu sự cố toàn tổ chức không đáng tin để so sánh.
- **Xem tần suất sự cố và MTTR riêng lẻ:** bỏ lỡ bức tranh tổng hợp, trung thực mà tín hiệu ghép đôi mang lại.
- **Một quy trình hậu kiểm tạo hiểu biết nhưng không có hạng mục hành động nào hoàn thành:** lãng phí việc học hỏi của tổ chức mà quy
  trình nhằm nắm bắt.
- **Một chính sách không đổ lỗi được tuyên bố nhưng lãnh đạo không thực sự sống theo:** tạo ra cùng sự hỏng dữ liệu do sợ hãi như một
  văn hóa đổ lỗi công khai.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Ứng phó sự cố không chính thức, báo cáo không nhất quán, và một văn hóa dễ đổ lỗi chủ động làm nản lòng việc báo
  cáo trung thực.
- **Cấp 2, Phát triển:** Có một số theo dõi sự cố, nhưng phân loại mức nghiêm trọng không nhất quán và thực hành không đổ lỗi được tuyên
  bố nhưng không được sống nhất quán.
- **Cấp 3, Chuẩn hóa:** Chỉ số sự cố phân rã theo giai đoạn với phân loại mức nghiêm trọng nhất quán, được ghi chép được theo dõi trên
  toàn tổ chức, với thực hành hậu kiểm thực sự không đổ lỗi.
- **Cấp 4, Quản lý:** Tần suất sự cố và MTTR được xem xét cùng nhau, các hạng mục hành động hậu kiểm được theo dõi đến khi hoàn thành,
  và phân loại được kiểm toán định kỳ về tính nhất quán.
- **Cấp 5, Điều phối:** Tổ chức có thành tích bền bỉ đã được chứng minh về thực hành không đổ lỗi tạo ra dữ liệu trung thực và các bản
  sửa hệ thống thật, và chỉ số sự cố trực tiếp, đáng tin cậy thông tin cho các quyết định đầu tư độ tin cậy.

## Ý tưởng để thảo luận

1. Quy trình hậu kiểm của chúng ta có vượt qua một phép thử trung thực về việc nó có thực sự không đổ lỗi không?
2. Bảng phân rã giai đoạn, phát hiện, tiếp nhận, giải quyết, của sự cố chậm nhất gần đây của chúng ta là gì?
3. Hai đội có phân loại mức nghiêm trọng của sự cố đáng kể gần nhất của chúng ta theo cùng cách không?
4. Bao nhiêu phần trăm hạng mục hành động hậu kiểm gần đây của chúng ta đã thực sự hoàn thành?
5. Nỗi sợ bị đổ lỗi có bao giờ định hình cách một sự cố được báo cáo hay thảo luận trong đội chúng ta không?

## Những điểm chính cần nhớ

- **Văn hóa hậu kiểm không đổ lỗi là điều kiện tiên quyết** cho dữ liệu sự cố đáng tin; nỗi sợ bị đổ lỗi làm hỏng báo cáo, tốc độ tiếp
  nhận và phân loại như nhau.
- Hãy phân rã thời gian ứng phó thành các giai đoạn **phát hiện, tiếp nhận và giải quyết**, mỗi giai đoạn chỉ về một cách sửa khác nhau.
- Hãy phân loại mức nghiêm trọng bằng **tiêu chí nhất quán, được ghi chép, được kiểm toán**, phản chiếu kỷ luật lỗi lọt của chủ đề 5.1.
- Hãy xem **tần suất sự cố và MTTR cùng nhau**, không bao giờ riêng lẻ, cùng kỷ luật ghép đôi như các chỉ số ổn định của DORA.
- Hãy theo dõi **các hạng mục hành động hậu kiểm đến khi hoàn thành**; chỉ số là sản phẩm phụ của thực hành tốt, không phải mục tiêu của
  nó.

## Tài liệu tham khảo và đọc thêm

- *Site Reliability Engineering: How Google Runs Production Systems*, do Betsy Beyer, Chris Jones, Jennifer Petoff, và Niall Richard
  Murphy biên tập (thực hành hậu kiểm không đổ lỗi và chỉ số sự cố).
- *The Site Reliability Workbook*, do Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara, và Stephen Thorne biên tập
  (hướng dẫn thực tế về ứng phó sự cố và hậu kiểm).
- *The Field Guide to Understanding Human Error*, của Sidney Dekker (lập luận nền tảng cho điều tra thất bại mang tính hệ thống, không
  đổ lỗi).
- Allspaw, John, "Blameless PostMortems and a Just Culture," Etsy Engineering Blog (2012): một phát biểu sớm, có ảnh hưởng về thực hành
  không đổ lỗi trong vận hành phần mềm.
