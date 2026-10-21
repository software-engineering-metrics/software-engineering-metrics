# 8.5 Lộ trình áp dụng từng bước

## Tổng quan và động lực

Chủ đề này khép lại Phần 8, và nội dung chính của cuốn sách này, bằng câu hỏi mà mọi độc giả đã đi đến đây nhiều khả năng đang hỏi: với
mọi thứ cuốn sách này bao quát, bốn mươi lăm chủ đề trải từ phân phối, trải nghiệm lập trình viên, chất lượng mã, kết quả kinh doanh,
độ tin cậy, bảo mật đến sự chuyển dịch kỷ nguyên AI, một tổ chức thực sự bắt đầu từ đâu. Câu trả lời trung thực mà chủ đề này đưa ra là:
không phải ở mọi nơi cùng lúc. Một đợt triển khai [bùng nổ một lần (big-bang)](https://en.wikipedia.org/wiki/Big_bang_adoption) toàn bộ
phạm vi của cuốn sách này, thử làm tất cả cùng lúc, vi phạm trực tiếp hướng dẫn cốt lõi của chủ đề 8.3, vì một chương trình chỉ số toàn
diện, rộng khắp được giới thiệu qua đêm chính là loại thay đổi gây ra nỗi sợ và việc lách thay vì lòng tin.

Thay vào đó, chủ đề này cung cấp một trình tự cụ thể, theo giai đoạn, xây trên một nguyên tắc đơn giản, nhất quán được lặp lại xuyên suốt
cuốn sách này: bắt đầu từ nền tảng, chứng minh giá trị trong phạm vi hẹp, rồi mở rộng có chủ đích, không bao giờ bỏ qua công việc quản
trị và lòng tin văn hóa của chủ đề 1.4 và chủ đề 8.3 để nhảy thẳng đến các chỉ số tinh vi, toàn diện. Trình tự này không tùy ý; nó theo
cấu trúc phụ thuộc mà chính các phần của cuốn sách này thiết lập, nền tảng của Phần 1 thực sự phải đến trước, vì mọi phần sau đều giả
định quản trị, định hướng kết quả và hiểu biết thống kê mà các chủ đề 1.1 đến 1.6 thiết lập.

Với các đội lớn, một lộ trình theo giai đoạn là thứ khiến toàn bộ phạm vi của cuốn sách này đạt được thay vì áp đảo. Các tổ chức doanh
nghiệp có thể dùng trình tự của chủ đề này để lập kế hoạch một đợt triển khai chương trình chỉ số thực sự nhiều quý hay nhiều năm với các
mốc thực tế; các tổ chức chính phủ, thường cần biện minh đầu tư chỉ số với một quy trình ngân sách hay giám sát theo từng bước thay vì một
đề nghị lớn duy nhất, có thể dùng các giai đoạn của chủ đề này như các điểm kiểm tra tự nhiên để chứng minh giá trị và đề nghị tiếp tục
đầu tư.

## Các nguyên tắc chính

- **Nền tảng trước, luôn luôn.** Quản trị (chủ đề 1.4), định hướng kết quả (chủ đề 1.3) và xây lòng tin văn hóa (chủ đề 8.3) không thể bị
  bỏ qua để nhảy thẳng đến các chỉ số tinh vi.
- **Hãy chứng minh giá trị trong phạm vi hẹp trước khi mở rộng.** Một đội đơn lẻ hay một họ chỉ số đơn lẻ, làm tốt và được tin, là nền
  tảng mạnh hơn một đợt triển khai toàn diện làm tồi.
- **Hãy sắp xếp trình tự theo sự phụ thuộc, không theo tầm quan trọng cảm nhận.** Một số họ chỉ số trong cuốn sách này phụ thuộc vào nền
  tảng mà các chủ đề khác thiết lập trước.
- **Mỗi giai đoạn nên tạo ra một kết quả chứng minh được, báo cáo được** biện minh cho việc tiếp tục đầu tư vào giai đoạn tiếp theo.
- **Đây là một lộ trình để điều chỉnh, không phải một đơn thuốc cứng nhắc, phổ quát.** Điểm xuất phát và ưu tiên cụ thể của tổ chức bạn
  nên định hình nhịp độ thực tế.

## Khuyến nghị

### Giai đoạn 1: Nền tảng và quản trị (Phần 1)

Trước khi đo đạc một họ chỉ số đơn lẻ nào, hãy thiết lập kỷ luật quản trị mà chủ đề 1.4 mô tả: một mẫu hiến chương chỉ số, một chính sách
rõ ràng về chẩn đoán-so-với-đánh-giá (chủ đề 1.1), và những kiến thức cơ bản về hiểu biết thống kê của chủ đề 1.6 được chia sẻ cho bất
kỳ ai sẽ diễn giải dữ liệu. Giai đoạn này chưa tạo ra bảng điều khiển nào; nó tạo ra nền tảng tổ chức mà mọi giai đoạn sau phụ thuộc vào.
Bỏ qua giai đoạn này để đi nhanh hơn là cách phổ biến nhất khiến hướng dẫn của cuốn sách này bị làm suy yếu trong thực tế, vì mọi chỉ
số sau thừa hưởng chất lượng quản trị, hoặc sự thiếu vắng của nó, mà giai đoạn này đã thiết lập.

### Giai đoạn 2: Một đội thí điểm duy nhất, chỉ số DORA, chỉ để chẩn đoán (Phần 2)

Hãy chọn một đội, tốt nhất là một đội sẵn lòng, tích cực thay vì bị ra lệnh, và đo đạc các chỉ số DORA của Phần 2, dùng đo đạc tự động
(chủ đề 1.5) thay vì tự báo cáo, ở chế độ thuần chẩn đoán theo trực tiếp hướng dẫn xây lòng tin của chủ đề 8.3. Hãy chạy điều này ít nhất
một quý đầy đủ trước khi mở rộng, và dùng nó như bãi thử cho mẫu hiến chương quản trị và cách tiếp cận thiết kế bảng điều khiển (chủ đề
8.1) của bạn trước khi cam kết với cả hai ở quy mô rộng hơn.

### Giai đoạn 3: Mở rộng chỉ số phân phối trên toàn tổ chức, thêm trải nghiệm lập trình viên (Phần 2, 3)

Một khi cuộc thí điểm đã chứng minh giá trị thật và, quan trọng, lòng tin bền vững (không có sự cố lạm dụng, hoặc một sự cố được xử lý
tốt theo hướng dẫn của chủ đề 8.3), hãy mở rộng đo đạc DORA sang các đội bổ sung, và giới thiệu khảo sát trải nghiệm lập trình viên đầu
tiên (chủ đề 3.7) trên toàn tổ chức. Giai đoạn này là nơi kỷ luật chẩn đoán-so-với-đánh-giá đối mặt phép thử thật đầu tiên ở quy mô lớn,
và duy trì nó cẩn thận ở đây đặt âm điệu cho mọi thứ theo sau.

### Giai đoạn 4: Chất lượng mã và các chỉ số kết quả (Phần 4, 5)

Với nền tảng phân phối và trải nghiệm lập trình viên đã được thiết lập và tin cậy, hãy thêm các chỉ số chất lượng mã của Phần 4, ưu tiên
phân tích điểm nóng (chủ đề 4.3) và theo dõi nợ kỹ thuật (chủ đề 4.5) làm điểm khởi đầu đòn bẩy cao nhất, và bắt đầu xây hạ tầng dữ liệu
viễn trắc kết quả mà chủ đề 7.4 lập luận cuối cùng nên là trọng tâm của chương trình của bạn, bắt đầu với tỷ lệ lỗi lọt (chủ đề 5.1)
và mức áp dụng tính năng (chủ đề 5.2) là các chỉ số kết quả dễ xử lý nhất để đo đạc trước.

### Giai đoạn 5: Độ tin cậy, bảo mật và hiệu chuẩn lại kỷ nguyên AI (Phần 6, 7)

Hãy thiết lập SLO và ngân sách lỗi chính thức (chủ đề 6.1) cho các dịch vụ quan trọng nhất của bạn, xây thực hành chỉ số sự cố không đổ
lỗi (chủ đề 6.2), và tiến hành cuộc kiểm toán chỉ số kỷ nguyên AI mà chủ đề 7.1 khuyến nghị nếu tổ chức của bạn đã áp dụng, hoặc đang áp
dụng, công cụ phát triển có AI hỗ trợ. Giai đoạn này thường chạy song song một phần với Giai đoạn 4 thay vì tuần tự nghiêm ngặt, vì công
việc độ tin cậy và bảo mật thường có mức khẩn cấp độc lập riêng.

### Liên tục: đánh giá trưởng thành hợp nhất và đầu tư liên tục

Một khi các giai đoạn cốt lõi đã được thiết lập, hãy áp dụng đánh giá trưởng thành hợp nhất của chủ đề 8.4 như một thực hành định kỳ hằng
năm, dùng các phát hiện của nó để định hướng đầu tư liên tục thay vì coi lộ trình là xong một khi mọi giai đoạn đã được chạm tới về mặt
kỹ thuật. Một chương trình chỉ số là một năng lực tổ chức bền vững, không phải một dự án có ngày kết thúc xác định, và giai đoạn liên tục
này phản ánh trực tiếp thực tế đó.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Triển khai bùng nổ một lần, toàn diện | Nhanh, bao phủ toàn diện ngay từ đầu | Rủi ro cao gây nỗi sợ và việc lách (chủ đề 8.3); không có nền tảng quản trị đã được chứng minh |
| Triển khai theo giai đoạn, nền tảng trước | Xây lòng tin và quản trị trước khi mở rộng phạm vi; mỗi giai đoạn tự chứng minh | Chậm hơn để đạt độ bao phủ đầy đủ; cần cam kết bền bỉ nhiều quý |
| Triển khai theo giai đoạn, chỉ số trước (bỏ qua quản trị) | Kết quả bảng điều khiển ban đầu nhanh hơn | Thừa hưởng quản trị yếu vào mọi giai đoạn sau; rủi ro dài hạn cao hơn |
| Áp dụng tùy hứng, cơ hội, không có lộ trình | Linh hoạt, đáp ứng nhu cầu tức thời | Tạo ra độ bao phủ không nhất quán, khó quản trị và lặp lại sai lầm từng giai đoạn |

Sự căng thẳng trung tâm là **tốc độ đến độ bao phủ toàn diện so với trình tự nền tảng trước**. Các tổ chức chịu áp lực phải cho thấy kết
quả nhanh bị cám dỗ bỏ qua công việc quản trị của Giai đoạn 1 và nhảy thẳng đến đo đạc chỉ số, nhưng lập luận tích lũy của cuốn sách
này, từ kỷ luật quản trị của chủ đề 1.4 đến hướng dẫn xây lòng tin của chủ đề 8.3, là bỏ qua nền tảng tạo ra một chương trình nhanh hơn
nhưng yếu hơn về căn bản. Hãy giải quyết sự căng thẳng bằng cách cam kết với trình tự theo giai đoạn, và bằng cách dùng kết quả chứng
minh được của mỗi giai đoạn (khuyến nghị then chốt của chủ đề 8.5) để biện minh đầu tư tiếp tục thay vì cố cho thấy kết quả toàn diện
trước khi nền tảng có thể hỗ trợ chúng.

## Câu hỏi để thảo luận với đội của bạn

1. **Tổ chức của chúng ta thực sự đang đứng ở đâu trong trình tự theo giai đoạn này lúc này, khi đánh giá trung thực?** Hãy ánh xạ trạng
   thái hiện tại của bạn với năm giai đoạn một cách trực tiếp; nhiều tổ chức, khi đánh giá trung thực, thấy mình có các chỉ số được đo
   đạc từ một giai đoạn sau mà chưa thực sự hoàn thành các giai đoạn nền tảng trước đó.

2. **Chúng ta có bỏ qua nền tảng quản trị của Giai đoạn 1 để chuyển thẳng sang đo đạc không, và nếu có, điều đó đã khiến chúng ta tốn gì?**
   Điều này nối trực tiếp với đánh giá trưởng thành của chủ đề 8.4; một nền tảng quản trị yếu bị phát hiện muộn thì đắt để bổ sung.

3. **Một đội thí điểm thực sự, sẵn lòng sẽ trông ra sao với chúng ta, nếu chúng ta chưa chạy một đội nào?** Hãy xác định một đội ứng viên
   thật, cụ thể thay vì để trừu tượng, và thảo luận điều gì khiến họ là ứng viên tốt một cách đặc thù.

4. **Mỗi giai đoạn chúng ta đã hoàn thành thực sự tạo ra kết quả chứng minh được nào, và chúng ta có dùng nó để biện minh đầu tư giai đoạn
   tiếp theo không?** Nếu bạn không thể chỉ ra một kết quả cụ thể, được truyền đạt từ một giai đoạn đã hoàn thành, khoảng trống đó đáng
   được gọi tên.

5. **Giai đoạn 4 và Giai đoạn 5 có đang chạy song song phù hợp với chúng ta không, hay một trong hai đang bị bỏ bê vì cái kia?** Hãy
   thảo luận liệu hồ sơ rủi ro cụ thể của tổ chức bạn, thiên về phân phối hơn hay thiên về độ tin cậy hơn, có nên định hình trình tự song
   song này khác với mặc định mà chủ đề này mô tả không.

6. **Chúng ta đã thiết lập thực hành đánh giá trưởng thành định kỳ, liên tục của chủ đề 8.4 chưa, hay lộ trình của chúng ta thực chất kết
   thúc một khi các giai đoạn ban đầu hoàn thành về mặt kỹ thuật?** Một lộ trình thiếu giai đoạn liên tục này có nguy cơ coi chương trình
   chỉ số là một dự án đã xong thay vì năng lực bền vững mà cuốn sách này lập luận nó cần phải là.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Lộ trình nhiều giai đoạn đầy đủ này nhiều khả năng có thể được nén lại đáng kể, vì một tổ chức nhỏ có thể đi qua các giai
đoạn quản trị nền tảng và thí điểm trong vài tuần thay vì vài quý. Đừng bỏ qua hoàn toàn Giai đoạn 1 ngay cả ở quy mô nhỏ, vì các thói
quen quản trị thiết lập sớm dễ duy trì hơn nhiều so với bổ sung khi tổ chức lớn lên.

**Doanh nghiệp nhỏ.** Hãy điều chỉnh nhịp lộ trình theo năng lực thực tế của bạn thay vì cố làm mọi giai đoạn trong trình tự mà chủ đề
này mô tả; một doanh nghiệp nhỏ có thể hợp lý dừng sau Giai đoạn 2 hoặc 3, với các chỉ số phân phối và trải nghiệm lập trình viên, và
hoãn công việc kết quả và độ tin cậy tinh vi hơn ở các Phần 4 đến 6 cho đến khi tổ chức đã lớn đủ để thực sự cần và hỗ trợ được chúng.

**Doanh nghiệp lớn.** Hãy lập kế hoạch lộ trình này tường minh như một chương trình nhiều quý hay nhiều năm với các mốc thực tế, và dùng
kết quả chứng minh được của mỗi giai đoạn làm điểm kiểm tra chính thức để đảm bảo sự bảo trợ của lãnh đạo và ngân sách tiếp tục, thay vì
cố biện minh toàn bộ phạm vi ngay từ đầu trong một cơ sở kinh doanh duy nhất.

**Chính phủ.** Hãy dùng các giai đoạn của chủ đề này làm các điểm kiểm tra tự nhiên, từng bước cho báo cáo ngân sách hay cơ quan giám sát,
đề nghị tiếp tục đầu tư ở mỗi ranh giới giai đoạn dựa trên kết quả đã được chứng minh, ghi chép của giai đoạn trước thay vì một đề nghị
lớn duy nhất ngay từ đầu có thể đối mặt sự hoài nghi hay khó khăn mua sắm lớn hơn.

## Ví dụ

**Doanh nghiệp lớn.** Một công ty công nghệ y tế đã áp dụng lộ trình này một cách tường minh làm khung cấu trúc cho chương trình chỉ số
của mình, hoàn thành nền tảng quản trị Giai đoạn 1 trong sáu tuần, chạy một cuộc thí điểm DORA một đội trong một quý đầy đủ, và chỉ sau
đó mới mở rộng sang độ bao phủ chỉ số phân phối toàn tổ chức ở Giai đoạn 3, khoảng năm tháng sau khi bắt đầu. Nhờ điều chỉnh nhịp độ
triển khai có chủ đích như vậy, công ty đã tránh được mẫu hình lách do sợ hãi mà chủ đề 8.3 mô tả là rủi ro của các đợt triển khai nhanh
hơn, kém kỷ luật hơn, và đội thí điểm Giai đoạn 2 của họ đã trở thành những người ủng hộ nội bộ không chính thức cho việc mở rộng chương
trình, vì đã tự trải nghiệm rằng cam kết chỉ để chẩn đoán được tôn trọng thật suốt quý thí điểm của họ.

**Chính phủ.** Một cơ quan công nghệ chính quyền tiểu bang đã dùng cấu trúc theo giai đoạn của chủ đề này một cách tường minh để sắp xếp
trình tự các đề nghị ngân sách gửi ủy ban giám sát, đề nghị tài trợ cho Giai đoạn 1 và Giai đoạn 2 như một khoản đầu tư thí điểm ban đầu
khiêm tốn, rồi quay lại ủy ban với kết quả được ghi chép của Giai đoạn 2, tần suất triển khai được cải thiện và tỷ lệ thay đổi thất bại
ổn định cho đội thí điểm, như bằng chứng cụ thể hỗ trợ một đề nghị tài trợ Giai đoạn 3 và Giai đoạn 4 lớn hơn vào chu kỳ ngân sách sau. Cách
tài trợ từng bước, dựa trên bằng chứng này đã thành công nơi một đề nghị toàn diện hơn ngay từ đầu cho toàn bộ phạm vi chương trình chỉ
số của cơ quan trước đó đã bị bác bỏ vì quá lớn và không đủ cơ sở bằng kết quả đã chứng minh.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của một lộ trình theo giai đoạn, nền tảng trước là một chương trình chỉ số thực sự hoạt động, đáng tin, được quản trị tốt, thực sự
được dùng để đưa ra quyết định, thay vì một chương trình trông toàn diện nhưng bị nỗi sợ làm hỏng hoặc quản trị kém mà một đợt triển
khai nhanh hơn có nguy cơ tạo ra. Ví dụ công ty công nghệ y tế ở trên cho thấy trực tiếp điều này: việc điều chỉnh nhịp độ có chủ đích
đã tạo ra lòng tin thật và sự ủng hộ nội bộ mà một đợt triển khai nhanh hơn nhiều khả năng sẽ làm suy yếu.

Tổng chi phí sở hữu là thời gian: lộ trình này thực sự mất nhiều thời gian hơn để đạt phạm vi đầy đủ so với một đợt triển khai bùng nổ.
Chi phí thời gian đó là cái giá trực tiếp, cần thiết của nền tảng lòng tin và quản trị mà cả cuốn sách này đã lập luận từ các chủ đề mở
đầu, và ví dụ chính phủ ở trên cho thấy một lợi ích phụ thực tế, thật: các giai đoạn từng bước, dựa trên bằng chứng thường dễ tài trợ và
biện minh hơn một đề nghị lớn duy nhất, chưa được chứng minh ngay từ đầu.

## Phản mẫu và cạm bẫy

- **Một đợt triển khai bùng nổ, toàn diện thử làm tất cả cùng lúc:** vi phạm hướng dẫn cốt lõi của chủ đề 8.3 và có nguy cơ gây nỗi sợ
  và việc lách ngay từ đầu.
- **Bỏ qua nền tảng quản trị của Giai đoạn 1 để đi nhanh hơn:** thừa hưởng quản trị yếu vào mọi giai đoạn sau, đắt để bổ sung sau này.
- **Chọn một đội thí điểm không sẵn lòng hoặc bị ra lệnh cho Giai đoạn 2:** làm suy yếu mục đích xây lòng tin mà một cuộc thí điểm thật
  nhằm phục vụ.
- **Không tạo ra hoặc truyền đạt kết quả chứng minh được từ mỗi giai đoạn:** mất cơ sở bằng chứng cần để biện minh đầu tư tiếp tục cho
  giai đoạn tiếp theo.
- **Coi lộ trình là xong một khi mọi giai đoạn đã được chạm tới về mặt kỹ thuật:** bỏ lỡ thực hành đánh giá trưởng thành liên tục mà
  chủ đề 8.4 khuyến nghị như một kỷ luật lâu dài, không phải một lần.
- **Cứng nhắc theo trình tự mặc định của chủ đề này bất kể hồ sơ rủi ro thực tế của tổ chức bạn:** lộ trình này nên được điều chỉnh, không
  áp dụng máy móc mà thiếu phán đoán.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Không có lộ trình; việc áp dụng chỉ số, nếu có, là tùy hứng và không có trình tự.
- **Cấp 2, Phát triển:** Một số giai đoạn đã được thử, nhưng công việc quản trị nền tảng bị bỏ qua hoặc chưa hoàn chỉnh, và kết quả giai
  đoạn không được ghi chép có hệ thống.
- **Cấp 3, Chuẩn hóa:** Một lộ trình theo giai đoạn theo trình tự nền tảng trước của chủ đề này được ghi chép và tích cực tuân theo, với
  mỗi giai đoạn tạo ra một kết quả chứng minh được.
- **Cấp 4, Quản lý:** Kết quả giai đoạn được dùng có hệ thống để biện minh đầu tư tiếp tục, và lộ trình được điều chỉnh có chủ đích theo
  hồ sơ rủi ro và ưu tiên cụ thể của tổ chức.
- **Cấp 5, Điều phối:** Tổ chức đã hoàn thành toàn bộ lộ trình và duy trì thực hành đánh giá trưởng thành liên tục của chủ đề 8.4 như một
  năng lực lâu dài, với thành tích nhiều năm đã được chứng minh về đầu tư chỉ số theo giai đoạn, xây lòng tin.

## Ý tưởng để thảo luận

1. Tổ chức của chúng ta thực sự đang đứng ở đâu trong trình tự theo giai đoạn này lúc này?
2. Chúng ta có bỏ qua hoặc rút ngắn giai đoạn quản trị nền tảng không, và điều đó đã khiến chúng ta tốn gì?
3. Một đội thí điểm thực sự, sẵn lòng sẽ trông ra sao cho đợt mở rộng tiếp theo của chúng ta?
4. Kết quả chứng minh được nào từ giai đoạn gần nhất của chúng ta có thể biện minh đề nghị đầu tư tiếp theo?
5. Chúng ta đã thiết lập thực hành đánh giá trưởng thành liên tục chưa, hay lộ trình của chúng ta thực chất kết thúc?

## Những điểm chính cần nhớ

- Hãy áp dụng hướng dẫn của cuốn sách này **theo từng giai đoạn, nền tảng trước**, không bao giờ như một đợt triển khai bùng nổ có nguy
  cơ gây nỗi sợ và việc lách.
- **Giai đoạn 1 (quản trị) không thể bị bỏ qua**; mọi giai đoạn sau thừa hưởng chất lượng quản trị mà giai đoạn này thiết lập.
- Hãy dùng **một đội thí điểm thực sự, sẵn lòng** để chứng minh giá trị và xây lòng tin trước khi mở rộng phạm vi trên toàn tổ chức.
- Mỗi giai đoạn nên tạo ra một **kết quả chứng minh được, báo cáo được** biện minh cho việc tiếp tục đầu tư vào giai đoạn tiếp theo.
- Hãy coi việc hoàn thành lộ trình là điểm bắt đầu của một **thực hành liên tục, bền vững** (đánh giá trưởng thành định kỳ của chủ đề
  8.4), không phải một dự án đã xong.

## Tài liệu tham khảo và đọc thêm

- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble, và Gene Kim (cơ sở bằng chứng cho các họ chỉ
  số mà lộ trình này sắp xếp trình tự).
- *Leading Change*, của John P. Kotter (các nguyên tắc quản lý thay đổi tổ chức áp dụng cho việc triển khai chương trình chỉ số theo giai
  đoạn).
- *The Lean Startup*, của Eric Ries (vòng xây-đo-học mà cách tiếp cận theo giai đoạn, chứng minh-giá-trị-rồi-mở-rộng của chủ đề này dựa
  vào).
- Hướng dẫn của Văn phòng Trách nhiệm Giải trình Chính phủ Hoa Kỳ (GAO) về đo lường hiệu suất và Đạo luật Hiện đại hóa GPRA: thực hành tài
  trợ chương trình khu vực công từng bước, dựa trên bằng chứng.
