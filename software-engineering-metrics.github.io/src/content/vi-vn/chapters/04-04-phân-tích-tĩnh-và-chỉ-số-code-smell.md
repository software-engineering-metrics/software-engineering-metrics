# 4.4 Phân tích tĩnh và chỉ số code smell

## Tổng quan và động lực

Các công cụ **[phân tích tĩnh (static analysis)](https://en.wikipedia.org/wiki/Static_program_analysis)** quét mã nguồn mà không
thực thi nó, gắn cờ các mẫu được biết là tương quan với lỗi, lỗ hổng bảo mật hay vấn đề khả năng bảo trì: mã không thể chạy tới, tài
nguyên không đóng, ép kiểu đáng ngờ, logic bị lặp, và nhóm rộng hơn là **code smell**, những mẫu cấu trúc không nhất thiết
là lỗi nhưng thường khiến mã khó hiểu, khó kiểm thử hay khó thay đổi an toàn hơn. Phân tích tĩnh là lớp tự động, liên tục nằm bên
dưới các chỉ số có mục tiêu hơn trong những chủ đề khác của phần này, chạy trên mọi commit và phát hiện vấn đề ngay lúc chúng được
đưa vào thay vì chờ một đợt kiểm toán định kỳ.

Mối quan tâm trung tâm của chủ đề này là khoảng cách giữa điều công cụ phân tích tĩnh báo cáo và điều thực sự quan trọng. Một công
cụ có thể gắn cờ hàng nghìn phát hiện trên một cơ sở mã lớn, và riêng số phát hiện là một chỉ số kém, vì nó trộn lẫn sở thích kiểu
dáng tầm thường với rủi ro thật, nghiêm trọng, và nó có thể bị kéo xuống bằng việc chặn cảnh báo dễ như bằng sửa thật. Giá trị của
phân tích tĩnh không đến từ số phát hiện thô mà từ việc một tổ chức phân loại mức nghiêm trọng, ngăn thụt lùi tốt đến đâu, và cưỡng
lại cám dỗ coi phán đoán của công cụ là sự thay thế cho đánh giá của con người thay vì phần bổ sung cho nó.

Với các đội lớn, phân tích tĩnh là cách thực tế duy nhất để áp một mức nền về chất lượng mã và vệ sinh bảo mật trên một cơ sở mã lớn
hơn mức bất kỳ đội nào có thể đánh giá thủ công đầy đủ. Các tổ chức doanh nghiệp và chính phủ, thường đối mặt với yêu cầu tuân thủ về
thực hành lập trình an toàn, dựa vào phân tích tĩnh như bằng chứng được ghi chép, có thể kiểm toán rằng một mức xem xét nền đã được
áp dụng nhất quán, không chỉ khi một người đánh giá tình cờ nhận ra vấn đề.

## Các nguyên tắc chính

- **Số phát hiện thô là một chỉ số kém khi đứng riêng.** Nó trộn lẫn vấn đề tầm thường và nghiêm trọng, và có thể bị lách bằng việc
  chặn cảnh báo thay vì sửa thật.
- **Phân loại mức nghiêm trọng quan trọng hơn số lượng.** Một số ít phát hiện nghiêm trọng đáng chú ý hơn nhiều phát hiện tầm thường.
- **Phân tích tĩnh bổ sung cho đánh giá của con người; nó không thay thế.** Công cụ bắt các mẫu; chúng không hiểu ý định hay bối cảnh
  nghiệp vụ.
- **Xu hướng "vấn đề mới được đưa vào" hành động được hơn tổng số backlog.** Nó cho bạn biết thực hành hiện tại đang cải thiện hay
  thụt lùi.
- **Dương tính giả làm xói mòn lòng tin vào công cụ.** Tỷ lệ dương tính giả không được quản lý khiến các đội bỏ qua phát hiện hàng
  loạt, kể cả những phát hiện thật.

## Khuyến nghị

### Theo dõi các phát hiện gia quyền theo mức nghiêm trọng, không phải số đếm thô

Hãy cấu hình công cụ phân tích tĩnh của bạn để phân loại phát hiện theo mức nghiêm trọng (nghiêm trọng, cao, trung bình, thấp, hoặc
thang tương đương), và theo dõi xu hướng gia quyền theo mức nghiêm trọng thay vì tổng số phẳng. Một cơ sở mã không có phát hiện
nghiêm trọng nào và năm trăm gợi ý kiểu dáng mức thấp ở trạng thái rất khác với một cơ sở có năm mươi phát hiện nghiêm trọng và
không có vấn đề kiểu dáng nào, và số đếm thô coi hai trạng thái này gần như tương đương trong khi chúng không phải vậy.

### Chặn cổng theo phát hiện mới được đưa vào, không theo toàn bộ backlog lịch sử

Hầu hết các cơ sở mã lâu đời mang một backlog phát hiện cũ có trước thực hành hiện tại và sẽ quá đắt nếu sửa hết một lần. Thay vì
chặn mọi công việc cho đến khi toàn bộ backlog được dọn, hãy đặt cổng CI theo việc một thay đổi cụ thể có đưa vào phát hiện mới trên
một ngưỡng nghiêm trọng đã thống nhất hay không, để backlog thu hẹp dần qua bảo trì thông thường trong khi ngăn tích tụ thêm. Sự
phân biệt này phản chiếu khuyến nghị ngưỡng sàn độ bao phủ của chủ đề 4.2: bảo vệ trước thụt lùi thay vì đòi một cách sửa đồng loạt
không thực tế.

### Chủ động quản lý tỷ lệ dương tính giả

Hãy định kỳ xem lại một mẫu các phát hiện, đặc biệt là nhóm nào có khối lượng lớn, và kiểm tra xem có bao nhiêu là dương tính giả
thật sự, tức những trường hợp công cụ gắn cờ một mẫu mà trong bối cảnh thực ra không có vấn đề. Hãy điều chỉnh cấu hình quy tắc để
chặn riêng các nhóm quy tắc thực sự nhiễu, giá trị thấp, thay vì để các đội hình thành thói quen bỏ qua toàn bộ đầu ra của công cụ
vì quá nhiều trong đó là nhiễu. Tỷ lệ dương tính giả cao, không được quản lý là cách nhanh nhất để phá hủy uy tín của một chương
trình phân tích tĩnh.

### Dùng phát hiện của phân tích tĩnh như lời nhắc đánh giá, không phải phán quyết tự động

Ngay cả một phát hiện hợp lệ, không phải dương tính giả cũng không phải lúc nào cũng đáng một bản sửa tự động, bắt buộc; một số mẫu
bị gắn cờ chấp nhận được trong bối cảnh cụ thể mà công cụ không thấy. Hãy xây một quy trình nhẹ để con người xem xét và hoặc sửa,
hoặc miễn trừ một cách tường minh, công khai một phát hiện kèm lý do được ghi lại, thay vì hoặc mù quáng buộc mọi phát hiện là bắt
buộc, hoặc cho phép việc chặn cảnh báo lặng lẽ, không ghi chép làm xói mòn giá trị của công cụ theo thời gian.

### Kết hợp phân tích tĩnh với các chỉ số chất lượng mã khác trong phần này

Phát hiện của phân tích tĩnh, điểm độ phức tạp (chủ đề 4.1) và dữ liệu điểm nóng (chủ đề 4.3) là bằng chứng bổ sung cho nhau, không
phải các chỉ số cạnh tranh. Một tệp có nhiều phát hiện phân tích tĩnh chưa giải quyết và cũng là điểm nóng mức thay đổi-độ phức tạp là
ứng viên đặc biệt mạnh cho sự chú ý ưu tiên, vì nhiều tín hiệu độc lập đang hội tụ về cùng một kết luận.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Số phát hiện thô làm chỉ số | Đơn giản để báo cáo | Trộn vấn đề tầm thường và nghiêm trọng; dễ bị lách bằng chặn cảnh báo |
| Xu hướng gia quyền theo mức nghiêm trọng | Phản ánh rủi ro thực chính xác hơn | Cần duy trì liên tục việc phân loại mức nghiêm trọng |
| Chặn cổng theo toàn bộ backlog lịch sử | Tối đa hóa độ sạch mã cuối cùng | Thường không thực tế với cơ sở mã lâu đời; có thể dừng mọi công việc |
| Chỉ chặn cổng theo phát hiện mới | Thực tế, ngăn thụt lùi, để backlog thu hẹp dần | Vấn đề cũ tồn tại lâu hơn nếu không có kế hoạch khắc phục chủ đích |

Sự căng thẳng trung tâm là **tính kỹ lưỡng so với tính thực tế**. Một chính sách phân tích tĩnh đòi toàn bộ backlog lịch sử phải được
giải quyết trước khi bất kỳ công việc mới nào tiếp tục thì kỹ lưỡng nhưng thường không thực tế với bất kỳ cơ sở mã nào có lịch sử
thật, và các đội dưới áp lực đó có xu hướng chặn cảnh báo hàng loạt thay vì sửa thật. Hãy giải quyết sự căng thẳng bằng cách chỉ chặn
cổng nghiêm ngặt theo phát hiện mới trong khi chạy một nỗ lực khắc phục riêng, có nhịp độ chủ đích đối với backlog cũ, được ưu tiên
bằng các kỹ thuật phân loại mức nghiêm trọng và đối chiếu mà chủ đề này và chủ đề 4.3 khuyến nghị.

## Câu hỏi để thảo luận với đội của bạn

1. **Chúng ta theo dõi xu hướng gia quyền theo mức nghiêm trọng, hay chỉ tổng số phát hiện thô?** Hãy mở bảng điều khiển thực tế của
   bạn và kiểm tra; số đếm thô là mặc định phổ biến ở nhiều công cụ và thường cần cấu hình chủ đích để hiển thị đúng mức nghiêm trọng.

2. **Backlog phát hiện cũ chưa giải quyết hiện tại của chúng ta là bao nhiêu, và chúng ta có kế hoạch chủ đích, có nhịp độ để giảm
   nó, hay nó chỉ đang tích tụ vô thời hạn?** Một backlog không được xử lý, lặng lẽ lớn dần là điều phổ biến và đáng được gọi tên
   thành thật thay vì để đó không xem xét.

3. **Tỷ lệ dương tính giả ước tính cho các nhóm phát hiện khối lượng lớn nhất của chúng ta là bao nhiêu, và chúng ta đã chỉnh cấu
   hình quy tắc để đáp lại chưa?** Nếu bạn chưa bao giờ kiểm tra, hãy lấy mẫu một lô phát hiện từ nhóm nhiễu nhất và đánh giá thành
   thật có bao nhiêu thực sự hành động được.

4. **Các kỹ sư trong đội chúng ta có tin các phát hiện phân tích tĩnh, hay đã học cách lờ chúng đi vì quá nhiều đầu ra là nhiễu?**
   Đây là một câu hỏi kiểm tra cảm nhận trực tiếp, thành thật đáng hỏi đội, vì một công cụ bị bỏ qua không đem lại giá trị thật dù
   năng lực lý thuyết của nó thế nào.

5. **Hiện nay chúng ta xử lý thế nào một phát hiện hợp lệ mà một đội tin rằng nên được miễn trừ trong bối cảnh cụ thể?** Hãy kiểm tra
   xem quy trình của bạn biến điều này thành một quyết định công khai, có ghi chép, hay nó xảy ra qua việc chặn cảnh báo lặng lẽ,
   không ghi chép làm xói mòn tín hiệu của công cụ theo thời gian.

6. **Nơi nào phát hiện phân tích tĩnh, điểm độ phức tạp và dữ liệu điểm nóng hội tụ vào cùng một tệp hay mô-đun?** Hãy đối chiếu tường
   minh ba tín hiệu này; sự hội tụ qua nhiều chỉ số độc lập là tín hiệu ưu tiên mạnh hơn bất kỳ tín hiệu đơn lẻ nào.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Một công cụ phân tích tĩnh nhẹ, miễn phí tích hợp vào CI từ đầu là bảo hiểm rẻ và bắt được vấn đề thật sớm, trước khi
một backlog cũ có cơ hội tích tụ. Hãy giữ bộ quy tắc tập trung vào các nhóm thực sự giá trị cao, ít nhiễu thay vì bật mọi quy tắc
sẵn có ngay lập tức.

**Doanh nghiệp nhỏ.** Hầu hết hệ sinh thái ngôn ngữ hiện đại có sẵn công cụ phân tích tĩnh miễn phí đủ năng lực; bật nó trong CI với
bộ quy tắc mặc định hợp lý đòi hỏi ít đầu tư. Hãy tập trung chặn cổng theo phát hiện mới thay vì cố giải quyết mọi backlog có sẵn
cùng một lúc.

**Doanh nghiệp lớn.** Quản lý tỷ lệ dương tính giả và phân loại mức nghiêm trọng một cách chủ đích trở nên thiết yếu ở quy mô này, vì
một công cụ chỉnh kém sinh nhiễu quá mức trên hàng chục đội sẽ bị bỏ qua trên toàn tổ chức. Hãy đầu tư một người phụ trách riêng cho
chính cấu hình công cụ phân tích tĩnh, coi việc chỉnh quy tắc là một kỷ luật liên tục chứ không phải việc thiết lập một lần.

**Chính phủ.** Phát hiện của phân tích tĩnh, đặc biệt là các phát hiện liên quan đến bảo mật, thường liên quan trực tiếp đến yêu cầu
tuân thủ và kiểm toán. Hãy duy trì một quy trình được ghi chép, có thể kiểm toán về cách các phát hiện được phân loại, sửa, hoặc miễn
trừ chính thức kèm lý do được ghi lại, vì bản thân tài liệu này thường chính là thứ một kiểm toán viên bên ngoài muốn xem.

## Ví dụ

**Doanh nghiệp lớn.** Bảng điều khiển phân tích tĩnh của một công ty phần mềm đã tích tụ hơn bốn mươi nghìn phát hiện chưa giải quyết
trên cơ sở mã sau nhiều năm không phân loại theo mức nghiêm trọng, một con số lớn đến mức các kỹ sư gần như đã thôi nhìn vào bảng
điều khiển. Một cách tiếp cận sửa đổi phân loại phát hiện theo mức nghiêm trọng, thấy rằng dưới hai trăm thực sự nghiêm trọng, và đặt
cổng CI riêng cho các phát hiện nghiêm trọng và cao mới trong khi để backlog mức thấp thu hẹp dần qua bảo trì mã thông thường. Trong
sáu tháng, các phát hiện nghiêm trọng đã giảm xuống một chữ số, và quan trọng hơn, dữ liệu khảo sát kỹ sư cho thấy lòng tin vào đầu ra
của công cụ được khôi phục khi nó giờ đưa ra một tín hiệu quản lý được, thực sự hành động được thay vì một backlog áp đảo, bị bỏ qua.

**Chính phủ.** Chính sách an ninh chuỗi cung ứng phần mềm của một cơ quan quốc phòng yêu cầu quét phân tích tĩnh với không phát hiện
nào chưa giải quyết trước mọi bản phát hành, một chính sách mà trên thực tế đã khiến các đội phát triển chặn cảnh báo hàng loạt phát
hiện, kể cả một số vấn đề bảo mật thật, chỉ để kịp hạn phát hành dưới một cổng tất-cả-hoặc-không-gì không khả thi. Một chính sách sửa
đổi yêu cầu không có phát hiện nghiêm trọng hay cao mới nào được đưa vào bởi bất kỳ bản phát hành nào, kết hợp với một kế hoạch khắc
phục và mốc thời gian được ghi chép, theo dõi cho backlog cũ, được một hội đồng quản trị an ninh xem xét hằng quý. Cách tiếp cận
thực tế, theo giai đoạn này vừa khôi phục sự xem xét bảo mật thật cho mã mới vừa tạo tiến bộ thật, đo được đối với backlog cũ trong
mười tám tháng, khác với chính sách trước không khả thi vốn chủ yếu sinh ra việc chặn cảnh báo hơn là sửa thật.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của phân tích tĩnh được quản lý tốt là bắt được lỗi thật và lỗ hổng bảo mật trước khi chúng tới sản xuất, với chi phí thấp hơn
nhiều so với công sức đánh giá của con người cần cho cùng phạm vi. Ví dụ cơ quan quốc phòng ở trên cho thấy cái giá của việc làm sai
điều này: một chính sách tất-cả-hoặc-không-gì không khả thi thực ra đã làm giảm sự xem xét bảo mật thật bằng cách thúc đẩy việc chặn
cảnh báo, ngược với ý định của nó.

Tổng chi phí sở hữu gồm bản thân công cụ, thường miễn phí hoặc chi phí thấp cho các hệ sinh thái ngôn ngữ phổ biến, và kỷ luật liên
tục của việc phân loại mức nghiêm trọng, quản lý dương tính giả và lập kế hoạch khắc phục backlog cũ. Chính kỷ luật liên tục đó, hơn
là bản thân công cụ, quyết định một chương trình phân tích tĩnh đem lại giá trị thật, đáng tin hay suy thoái thành nhiễu bị bỏ qua.

## Phản mẫu và cạm bẫy

- **Coi số phát hiện thô là chỉ số:** trộn lẫn vấn đề tầm thường và nghiêm trọng và dễ bị lách bằng chặn cảnh báo.
- **Đòi toàn bộ backlog lịch sử được giải quyết trước khi bất kỳ công việc mới nào tiếp tục:** thường không thực tế và thúc đẩy chặn
  cảnh báo hơn là sửa thật.
- **Phớt lờ tỷ lệ dương tính giả:** mức nhiễu không được quản lý khiến các đội bỏ qua hoàn toàn đầu ra của công cụ, kể cả các phát
  hiện thật.
- **Chặn cảnh báo lặng lẽ, không ghi chép các phát hiện hợp lệ:** làm xói mòn tín hiệu của công cụ và không để lại dấu vết kiểm toán
  cho mục đích tuân thủ.
- **Coi phát hiện của phân tích tĩnh là phán quyết tự động không có đánh giá của con người:** bỏ lỡ bối cảnh mà công cụ không thấy.
- **Không bao giờ đối chiếu phát hiện với dữ liệu độ phức tạp và điểm nóng:** bỏ lỡ tín hiệu ưu tiên mạnh hơn mà bằng chứng hội tụ
  mang lại.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Phân tích tĩnh không được chạy, hoặc các phát hiện tích tụ không quản lý, không phân loại mức nghiêm trọng hay
  theo dõi xu hướng.
- **Cấp 2, Phát triển:** Một số phân tích tĩnh chạy trong CI, nhưng việc phân loại mức nghiêm trọng không nhất quán và tỷ lệ dương
  tính giả không được quản lý.
- **Cấp 3, Chuẩn hóa:** Các phát hiện được gia quyền theo mức nghiêm trọng và CI đặt cổng theo phát hiện nghiêm trọng và cao mới, trên
  toàn tổ chức.
- **Cấp 4, Quản lý:** Tỷ lệ dương tính giả được chỉnh tích cực, backlog cũ có kế hoạch khắc phục có nhịp độ, được ghi chép, và các
  miễn trừ công khai và có ghi chép.
- **Cấp 5, Điều phối:** Phát hiện phân tích tĩnh, dữ liệu độ phức tạp và dữ liệu điểm nóng được đối chiếu thường xuyên để ưu tiên đầu
  tư, và tổ chức có thể chỉ ra những cải thiện cụ thể, đo được về lỗi hay bảo mật truy được về chương trình.

## Ý tưởng để thảo luận

1. Xu hướng gia quyền theo mức nghiêm trọng hiện tại của chúng ta là gì, và nó đang cải thiện hay xấu đi?
2. Backlog phát hiện cũ của chúng ta lớn đến đâu, và chúng ta có kế hoạch chủ đích để giảm nó không?
3. Tỷ lệ dương tính giả ước tính cho nhóm phát hiện nhiễu nhất của chúng ta là bao nhiêu?
4. Các kỹ sư trong đội chúng ta hiện tin hay bỏ qua đầu ra phân tích tĩnh?
5. Nơi nào phát hiện phân tích tĩnh hội tụ với dữ liệu độ phức tạp hay điểm nóng trong cơ sở mã của chúng ta?

## Những điểm chính cần nhớ

- Hãy theo dõi **xu hướng gia quyền theo mức nghiêm trọng**, không phải số phát hiện thô vốn trộn lẫn vấn đề tầm thường và nghiêm
  trọng.
- Hãy đặt cổng CI theo **phát hiện mới được đưa vào**, không theo toàn bộ backlog lịch sử, để ngăn thụt lùi mà không đòi một cách
  sửa đồng loạt không thực tế.
- Hãy chủ động quản lý **tỷ lệ dương tính giả**; nhiễu không được quản lý phá hủy lòng tin vào công cụ và dẫn đến việc phát hiện bị
  bỏ qua hàng loạt.
- Hãy coi phát hiện là **lời nhắc để con người đánh giá**, với miễn trừ công khai, có ghi chép, không phải phán quyết tự động hay
  chặn cảnh báo lặng lẽ.
- Hãy đối chiếu phân tích tĩnh với **dữ liệu độ phức tạp và điểm nóng** (chủ đề 4.1, 4.3) để có bằng chứng ưu tiên hội tụ, mạnh hơn.

## Tài liệu tham khảo và đọc thêm

- *Static Program Analysis*, của Anders Møller và Michael I. Schwartzbach (nền tảng lý thuyết và thực hành của các kỹ thuật phân tích
  tĩnh).
- Hướng dẫn của OWASP về kiểm thử bảo mật ứng dụng tĩnh (SAST), một phần của các tài nguyên rộng hơn của OWASP Foundation về thực
  hành phát triển phần mềm an toàn.
- *Refactoring: Improving the Design of Existing Code*, của Martin Fowler (danh mục code smell mà nhiều công cụ phân tích tĩnh dựa vào).
- *Working Effectively with Legacy Code*, của Michael Feathers (quản lý một backlog cũ các vấn đề chất lượng trong một cơ sở mã lâu
  đời).
