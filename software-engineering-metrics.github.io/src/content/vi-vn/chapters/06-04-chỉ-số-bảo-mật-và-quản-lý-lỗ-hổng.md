# 6.4 Chỉ số bảo mật và quản lý lỗ hổng

## Tổng quan và động lực

Chủ đề này khép lại Phần 6 bằng việc mở rộng cùng kỷ luật độ tin cậy mà phần này đã xây dựng, đặt mục tiêu, ghép với rào chắn, báo cáo
sự cố trung thực, sang một rủi ro riêng biệt nhưng liên quan chặt chẽ: không phải một hệ thống có tự hỏng hay không, mà là có ai cố ý
làm nó hỏng, hay khai thác nó, hay không. Các chỉ số **quản lý lỗ hổng (vulnerability management)** đo một tổ chức tìm và sửa các điểm yếu
bảo mật tốt đến đâu trước khi chúng bị khai thác: có bao nhiêu lỗ hổng, chúng nghiêm trọng thế nào, và then chốt là chúng được khắc phục
nhanh đến đâu một khi được phát hiện, vì một lỗ hổng đã biết nhưng chưa vá là một rủi ro thường trực, định lượng được mà tổ chức đã chọn
gánh, dù có chủ đích hay do lơ là.

Mối quan tâm trung tâm của chủ đề này song song trực tiếp với cách chủ đề 4.4 xử lý các phát hiện phân tích tĩnh: số lỗ hổng thô là một
chỉ số kém, trộn lẫn vấn đề tầm thường và nghiêm trọng, và nó chịu đúng những rủi ro bị lách như nhau, thu hẹp định nghĩa, chặn cảnh báo
và lách ngưỡng, mà chủ đề 1.2 mô tả chung. Điều bổ sung cụ thể mà các chỉ số bảo mật đòi hỏi là thời gian khắc phục được theo dõi theo
mức nghiêm trọng, vì một lỗ hổng nghiêm trọng nằm chưa vá hàng tháng đại diện cho một rủi ro khác về bản chất so với chính lỗ hổng đó
được phát hiện và sửa trong một ngày, thông tin mà riêng một số đếm đơn giản không truyền đạt được.

Với các đội lớn, các chỉ số bảo mật mang hệ quả vượt rủi ro kỹ thuật tức thời: các tổ chức doanh nghiệp đối mặt với rủi ro hợp đồng và
danh tiếng từ một vụ xâm phạm, và các tổ chức chính phủ đối mặt với hệ quả an ninh quốc gia, pháp lý và lòng tin công chúng khiến các chỉ
số bảo mật là vấn đề lợi ích công thật sự, không chỉ là mối quan tâm kỹ thuật nội bộ. Chủ đề này đối xử với quản lý lỗ hổng bằng cùng độ
chặt chẽ và cùng kỷ luật ghép với rào chắn mà cuốn sách này áp dụng xuyên suốt, vì các chỉ số bảo mật chịu mọi rủi ro bị lách mà cuốn
sách này mô tả, với mức cược cao tương ứng khi việc lách thành công.

## Các nguyên tắc chính

- **Thời gian khắc phục theo mức nghiêm trọng quan trọng hơn số lỗ hổng thô.** Một vấn đề nghiêm trọng chưa vá hàng tháng là một rủi ro
  khác về bản chất so với chính vấn đề đó được phát hiện và sửa nhanh.
- **Các chỉ số bảo mật chịu cùng rủi ro bị lách như các phát hiện phân tích tĩnh** (chủ đề 4.4), với mức cược cao hơn khi việc lách
  thành công.
- **Phân loại mức nghiêm trọng cần tiêu chí chuẩn hóa, bên ngoài** bất cứ khi nào có thể, không phải phán đoán thuần túy nội bộ có thể
  trôi dạt về phía dễ dãi.
- **Một lỗ hổng được công bố và sửa nhanh là dấu hiệu của một quy trình lành mạnh, không phải thất bại cần che giấu.** Trừng phạt việc
  công bố làm nản lòng chính việc báo cáo mà cả hệ thống này phụ thuộc vào.
- **Nợ bảo mật là một hạng mục của nợ kỹ thuật** (chủ đề 4.5) và nên cạnh tranh cho năng lực khắc phục được ưu tiên trên cùng cơ sở
  tường minh, được định lượng.

## Khuyến nghị

### Theo dõi thời gian khắc phục theo mức nghiêm trọng như chỉ số chính

Với mọi lỗ hổng được phát hiện, hãy ghi lại mức nghiêm trọng của nó (dùng một thang chuẩn hóa như [Hệ thống Chấm điểm Lỗ hổng Phổ biến](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System),
CVSS, khi áp dụng được) và theo dõi thời gian từ lúc phát hiện đến khi khắc phục thật, không phải đến khi một phiếu được đóng hay một
bản sửa được hợp nhất nhưng chưa triển khai. Hãy đặt mục tiêu thời gian khắc phục tường minh theo mức nghiêm trọng, thường đo bằng ngày
cho vấn đề nghiêm trọng và bằng tuần cho các vấn đề mức thấp hơn, và theo dõi mức tuân thủ so với các mục tiêu đó như chỉ số sức khỏe
bảo mật chính, thay vì một số lỗ hổng thô, không gia quyền.

### Dùng chấm điểm mức nghiêm trọng chuẩn hóa thay vì phán đoán thuần túy nội bộ

Khi có sẵn một hệ thống chấm điểm bên ngoài chuẩn hóa như CVSS, hãy dùng nó làm cơ sở chính cho phân loại mức nghiêm trọng thay vì dựa
hoàn toàn vào phán đoán nội bộ, có thể không nhất quán. Điều này phản chiếu kỷ luật phân loại lỗi lọt của chủ đề 5.1 và kỷ luật phân
loại sự cố của chủ đề 6.2, áp dụng riêng cho bảo mật, và nó chống lại cùng rủi ro trôi dạt về phía dễ dãi mà các chủ đề đó cảnh báo, vì
một điểm số neo vào bên ngoài khó bị lặng lẽ định nghĩa lại thấp hơn so với một điểm thuần túy nội bộ.

### Xây dựng một văn hóa công bố lỗ hổng và báo cáo nội bộ thực sự không trừng phạt

Hãy áp dụng trực tiếp nguyên tắc hậu kiểm không đổ lỗi của chủ đề 6.2 vào bảo mật: một kỹ sư phát hiện và báo cáo một lỗ hổng do chính
mình đưa vào, hoặc một nhà nghiên cứu công bố có trách nhiệm một lỗ hổng tìm thấy từ bên ngoài, nên được coi là đang cung cấp một dịch
vụ có giá trị, không phải đang thú nhận một thất bại. Trừng phạt việc công bố, nội bộ hay từ các nhà nghiên cứu bên ngoài, làm nản lòng
một cách chắc chắn chính việc báo cáo mà toàn bộ hệ thống quản lý lỗ hổng phụ thuộc vào, đẩy rủi ro thật xuống ngầm thay vì vào một quy
trình khắc phục được quản lý.

### Coi nợ bảo mật là một hạng mục trong backlog nợ kỹ thuật của bạn

Hãy gộp các lỗ hổng đã biết, chấp nhận rủi ro, những lỗ hổng cố ý chưa khắc phục do các ưu tiên cạnh tranh, vào cùng backlog nợ kỹ
thuật hiển thị, được định lượng mô tả trong chủ đề 4.5, với cùng khung chi phí sửa so với chi phí gánh. Điều này ngăn rủi ro bảo mật
hoặc biến mất vào một trạng thái "chúng ta biết về nó" vô hình, không được ghi chép, hoặc cạnh tranh bất công với công việc tính năng mà
không có luận cứ tường minh, được định lượng cho mức ưu tiên của nó.

### Kết hợp các chỉ số lỗ hổng với bối cảnh phơi nhiễm và khả năng khai thác

Không phải lỗ hổng nào có cùng điểm nghiêm trọng danh nghĩa cũng mang cùng rủi ro thực tế: một lỗ hổng nghiêm trọng trong một công cụ nội
bộ không có phơi nhiễm mạng bên ngoài là một rủi ro khác so với cùng mức nghiêm trọng danh nghĩa trong một dịch vụ hướng internet xử lý
dữ liệu khách hàng. Khi khả thi, hãy gia quyền việc ưu tiên theo bối cảnh phơi nhiễm và khả năng khai thác thực tế, không chỉ điểm nghiêm
trọng, để năng lực khắc phục tập trung vào các mục rủi ro cao nhất thực sự trước.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Số lỗ hổng thô | Đơn giản để báo cáo | Trộn lẫn vấn đề tầm thường và nghiêm trọng; dễ bị lách bằng chặn cảnh báo |
| Theo dõi gia quyền theo mức nghiêm trọng, thời gian khắc phục | Phản ánh mức phơi nhiễm rủi ro thực theo thời gian | Cần phân loại và theo dõi có kỷ luật, nhất quán |
| Phán đoán mức nghiêm trọng thuần túy nội bộ | Linh hoạt, thiết kế theo bối cảnh | Dễ trôi dạt về phía dễ dãi và không nhất quán giữa các đội |
| Chấm điểm bên ngoài chuẩn hóa (như CVSS) cộng gia quyền theo bối cảnh | Nhất quán, neo bên ngoài, chống lách | Cần phân tích bối cảnh thêm để ưu tiên thật sự chính xác |

Sự căng thẳng trung tâm là **tính nhất quán so với bối cảnh**. Một cách tiếp cận chấm điểm thuần túy chuẩn hóa nhất quán và chống lách
nhưng có thể bỏ lỡ bối cảnh thật, phơi nhiễm và khả năng khai thác, vốn quyết định rủi ro thực tế; một cách tiếp cận thuần túy theo bối
cảnh, do nội bộ phán đoán nắm bắt được sắc thái nhưng dễ rơi vào cùng rủi ro trôi dạt về phía dễ dãi mà cuốn sách này cảnh báo với mọi
chỉ số phụ thuộc phân loại khác. Hãy giải quyết sự căng thẳng bằng cách neo vào chấm điểm chuẩn hóa như đường cơ sở nhất quán, rồi áp
dụng gia quyền bối cảnh được ghi chép, có thể kiểm toán lên trên nó, thay vì chỉ một trong hai thái cực.

## Câu hỏi để thảo luận với đội của bạn

1. **Chúng ta có theo dõi thời gian khắc phục theo mức nghiêm trọng, hay chỉ số lỗ hổng thô?** Hãy mở chỉ số hiện tại thực tế của bạn và
   kiểm tra xem nó có phân biệt một vấn đề nghiêm trọng chưa vá hàng tháng với một vấn đề được sửa trong một ngày không, vì số đếm thô
   coi hai tình huống rủi ro rất khác nhau này như nhau.

2. **Chúng ta có dùng một hệ thống chấm điểm mức nghiêm trọng bên ngoài chuẩn hóa, hay phân loại dựa vào phán đoán thuần túy nội bộ, có
   thể không nhất quán?** Nếu thuần túy nội bộ, hãy thảo luận việc áp dụng một chuẩn như CVSS sẽ thay đổi gì trong thực hành phân loại
   hiện tại của bạn.

3. **Một kỹ sư đã đưa vào rồi báo cáo một lỗ hổng có cảm thấy an toàn khi làm vậy không, hay sẽ sợ bị trừng phạt?** Đây là phiên bản
   riêng cho bảo mật của câu hỏi văn hóa không đổ lỗi ở chủ đề 6.2, và một câu trả lời thành thật ở đây cực kỳ quan trọng để biết dữ liệu
   lỗ hổng của bạn có đáng tin hay không.

4. **Chúng ta có một backlog hiển thị, được định lượng các lỗ hổng đã biết, chấp nhận rủi ro, hay trạng thái "chúng ta biết về nó" lặng
   lẽ trở nên vô hình và không được xử lý theo thời gian?** Hãy kiểm tra xem nợ bảo mật của bạn có được theo dõi với cùng độ chặt chẽ
   như backlog nợ kỹ thuật chung của bạn không (chủ đề 4.5).

5. **Việc ưu tiên khắc phục của chúng ta có tính đến phơi nhiễm và khả năng khai thác thực tế, hay chỉ dựa thuần túy vào điểm nghiêm
   trọng danh nghĩa bất kể bối cảnh?** Hãy chọn một ví dụ thật nơi hai lỗ hổng có mức nghiêm trọng danh nghĩa tương tự mang rủi ro thực tế
   rất khác nhau, và thảo luận liệu quy trình hiện tại của bạn có ưu tiên chúng đúng không.

6. **Phân loại mức nghiêm trọng của một lỗ hổng có bao giờ trôi xuống thấp theo thời gian mà không có lý do chính đáng rõ ràng không?**
   Điều này phản chiếu mẫu hình lách qua định nghĩa mà chủ đề 1.2 và chủ đề 6.2 đều cảnh báo; hãy kiểm toán một mẫu các phân loại gần
   đây của bạn về rủi ro cụ thể này.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Quy trình quản lý lỗ hổng chính thức thường không cần thiết rất sớm, nhưng áp dụng quét phụ thuộc tự động cơ bản và một
chuẩn mực báo cáo nội bộ đơn giản, trung thực ngay từ đầu tốn ít và ngăn nợ bảo mật tích tụ vô hình trước khi đội có năng lực xử lý nó
một cách có hệ thống.

**Doanh nghiệp nhỏ.** Hầu hết các nền tảng phát triển hiện đại có sẵn quét lỗ hổng tự động miễn phí hoặc chi phí thấp cho các phụ thuộc;
hãy bật nó sớm và theo dõi thời gian khắc phục cho bất cứ thứ gì được gắn cờ nghiêm trọng, dù không có chức năng bảo mật chuyên trách hay
công cụ tinh vi.

**Doanh nghiệp lớn.** Chấm điểm mức nghiêm trọng chuẩn hóa nhất quán và văn hóa công bố thực sự không trừng phạt đều thiết yếu và đều khó
duy trì hơn ở quy mô lớn, nơi sự không nhất quán trên hàng chục đội và sự trôi dạt văn hóa về phía tìm người đổ lỗi sau một sự cố nghiêm
trọng là những rủi ro thường trực. Hãy đầu tư một chức năng quản trị bảo mật chuyên trách để duy trì tính nhất quán phân loại và chủ động
bảo vệ văn hóa công bố.

**Chính phủ.** Các chỉ số bảo mật ở đây thường giao trực tiếp với an ninh quốc gia, tuân thủ quy định và lòng tin công chúng, và một lỗ
hổng nghiêm trọng bị xử lý sai có thể có hệ quả vượt xa một vụ xâm phạm điển hình ở khu vực tư. Hãy duy trì phân loại mức nghiêm trọng
chặt chẽ, neo bên ngoài, chủ động bảo vệ văn hóa công bố nội bộ và bên ngoài, và đối xử với nợ bảo mật bằng sự minh bạch và độ chặt chẽ
ưu tiên mà chủ đề này khuyến nghị, vì một lỗ hổng nghiêm trọng không được ghi chép, lặng lẽ chấp nhận trong hạ tầng công là một rủi ro
thực sự nghiêm trọng, kiểm toán được.

## Ví dụ

**Doanh nghiệp lớn.** Đội bảo mật của một công ty phần mềm trong nhiều năm chỉ báo cáo số lỗ hổng thô cho lãnh đạo, một con số xu hướng
đi ngang, tạo ra cảm giác ổn định sai. Một phân tích sửa đổi gia quyền theo mức nghiêm trọng, thời gian khắc phục cho thấy dù tổng số
đi ngang, các lỗ hổng nghiêm trọng mất trung bình hơn chín mươi ngày để khắc phục, vượt xa mọi mục tiêu hợp lý, vì chúng cạnh tranh
không thành công với công việc tính năng trong mọi chu kỳ lập kế hoạch mà không có năng lực riêng, được bảo vệ. Việc thiết lập một mục
tiêu khắc phục cứng 7 ngày cho lỗ hổng nghiêm trọng, được hậu thuẫn bởi năng lực khắc phục nợ bảo mật được bảo vệ phản chiếu mô hình phân
bổ nợ kỹ thuật của chủ đề 4.5, đã đưa thời gian khắc phục nghiêm trọng trung bình xuống dưới năm ngày trong hai quý.

**Chính phủ.** Một cơ quan hạ tầng quốc gia phát hiện, sau một cuộc kiểm toán bảo mật bên ngoài, rằng các kỹ sư nội bộ đã không chính
thức tránh báo cáo những lỗ hổng họ phát hiện trong mã của chính mình, vì sợ nó phản ánh xấu lên đánh giá hiệu suất của họ, một sự song
song rõ ràng với mẫu hình báo cáo thiếu sự cố do đổ lỗi ở chủ đề 6.2. Cơ quan đã ban hành một chính sách tường minh, truyền đạt công
khai bảo vệ người báo cáo lỗ hổng nội bộ khỏi mọi hậu quả về hiệu suất, mô phỏng trực tiếp theo thực hành ứng phó sự cố không đổ lỗi, và
các báo cáo lỗ hổng nội bộ tăng đáng kể trong năm sau, một kết quả mà lãnh đạo cơ quan đã diễn giải đúng là bằng chứng của phát hiện được
cải thiện và báo cáo trung thực, không phải bằng chứng chất lượng mã suy giảm, tránh được kết luận tự nhiên nhưng sai rằng một con số
tăng phải có nghĩa mọi thứ đã tệ đi.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của việc quản lý lỗ hổng chặt chẽ, được phân loại tốt, báo cáo trung thực là chi phí xâm phạm được tránh, vốn với một sự cố bảo
mật nghiêm trọng thường lớn hơn chi phí khắc phục chủ động nhiều lần, cùng với thiệt hại về quy định, hợp đồng và danh tiếng được tránh.
Ví dụ công ty phần mềm ở trên cho thấy cơ chế cụ thể: nợ bảo mật đã lặng lẽ thua cuộc cạnh tranh ưu tiên với công việc tính năng trong
nhiều năm, đúng mẫu hình mà chủ đề 4.5 cảnh báo cho nợ kỹ thuật nói chung, cho đến khi năng lực khắc phục được bảo vệ sửa nó trực tiếp.

Tổng chi phí sở hữu gồm công cụ quét tự động, năng lực khắc phục được bảo vệ mà chủ đề này khuyến nghị phân bổ, và đầu tư văn hóa bền bỉ
vào thực hành công bố không trừng phạt. Chi phí đó khiêm tốn so với chi phí của một lỗ hổng bị khai thác thành công nghiêm trọng mà việc
khắc phục chủ động, được ưu tiên tốt đã bắt và sửa từ rất lâu trước khi nó có thể bị khai thác.

## Phản mẫu và cạm bẫy

- **Chỉ theo dõi số lỗ hổng thô:** trộn lẫn vấn đề tầm thường và nghiêm trọng và cho cảm giác ổn định hay khủng hoảng sai bất kể rủi ro
  thực.
- **Phân loại mức nghiêm trọng thuần túy nội bộ, không chuẩn hóa:** dễ trôi dạt về phía dễ dãi và không nhất quán giữa các đội.
- **Trừng phạt việc công bố lỗ hổng, nội bộ hay bên ngoài:** đẩy rủi ro thật xuống ngầm thay vì vào một quy trình khắc phục được quản
  lý.
- **Nợ bảo mật không có backlog hiển thị, được định lượng:** mặc nhiên thua cuộc cạnh tranh ưu tiên với công việc tính năng.
- **Ưu tiên chỉ theo điểm nghiêm trọng danh nghĩa, bỏ qua bối cảnh phơi nhiễm và khả năng khai thác:** hướng sai năng lực khắc phục hạn
  chế.
- **Diễn giải số báo cáo lỗ hổng tăng là bằng chứng chất lượng suy giảm mà không kiểm tra liệu bản thân việc báo cáo có được cải thiện
  không:** một trường hợp cụ thể của bẫy biến gây nhiễu ở chủ đề 1.6.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Lỗ hổng được theo dõi, nếu có, như một số đếm thô, không gia quyền theo mức nghiêm trọng, không theo dõi thời gian
  khắc phục, và một văn hóa công bố mang tính trừng phạt.
- **Cấp 2, Phát triển:** Có một số phân loại mức nghiêm trọng, nhưng chuẩn không nhất quán và thời gian khắc phục không được theo dõi so
  với mục tiêu tường minh.
- **Cấp 3, Chuẩn hóa:** Chấm điểm mức nghiêm trọng chuẩn hóa, neo bên ngoài và mục tiêu thời gian khắc phục tường minh theo mức nghiêm
  trọng được áp dụng nhất quán, với một văn hóa công bố thực sự không trừng phạt.
- **Cấp 4, Quản lý:** Nợ bảo mật được theo dõi trong một backlog hiển thị, được định lượng với năng lực khắc phục được bảo vệ; việc ưu
  tiên tính đến bối cảnh phơi nhiễm và khả năng khai thác, không chỉ mức nghiêm trọng.
- **Cấp 5, Điều phối:** Tổ chức có thể chỉ ra những lần giảm cụ thể, đo được về thời gian khắc phục nghiêm trọng và có thể chứng minh một
  văn hóa công bố bền bỉ, đáng tin cậy tạo ra dữ liệu lỗ hổng trung thực, toàn diện.

## Ý tưởng để thảo luận

1. Thời gian khắc phục trung bình hiện tại của chúng ta cho các lỗ hổng nghiêm trọng là bao nhiêu, và nó có đáp ứng một mục tiêu tường
   minh không?
2. Một kỹ sư đã đưa vào một lỗ hổng có cảm thấy an toàn khi tự báo cáo nó không?
3. Chúng ta có một backlog hiển thị, được định lượng về nợ bảo mật đã biết, chấp nhận rủi ro không?
4. Việc ưu tiên khắc phục của chúng ta có tính đến phơi nhiễm thực tế, hay chỉ mức nghiêm trọng danh nghĩa?
5. Phân loại mức nghiêm trọng có bao giờ trôi xuống thấp theo thời gian mà không có lý do chính đáng rõ ràng không?

## Những điểm chính cần nhớ

- Hãy theo dõi **thời gian khắc phục theo mức nghiêm trọng**, không phải số lỗ hổng thô, như chỉ số sức khỏe bảo mật chính.
- Hãy dùng **chấm điểm mức nghiêm trọng bên ngoài chuẩn hóa** (như CVSS) làm đường cơ sở nhất quán, chống lại rủi ro trôi dạt về phía
  dễ dãi mà phán đoán thuần túy nội bộ mời gọi.
- Hãy xây một **văn hóa công bố thực sự không trừng phạt**; trừng phạt việc báo cáo đẩy rủi ro thật xuống ngầm.
- Hãy coi **nợ bảo mật là một hạng mục của nợ kỹ thuật** (chủ đề 4.5), cạnh tranh công bằng cho năng lực khắc phục được bảo vệ.
- Hãy gia quyền việc ưu tiên theo **phơi nhiễm và khả năng khai thác thực tế**, không chỉ điểm nghiêm trọng.

## Tài liệu tham khảo và đọc thêm

- Đặc tả Hệ thống Chấm điểm Lỗ hổng Phổ biến (CVSS) của FIRST.org: khung chấm điểm mức nghiêm trọng chuẩn hóa được nhắc đến xuyên suốt
  chủ đề này.
- Các tài nguyên của OWASP Foundation về quản lý lỗ hổng và thực hành vòng đời phát triển phần mềm an toàn.
- *Site Reliability Engineering: How Google Runs Production Systems*, do Betsy Beyer, Chris Jones, Jennifer Petoff, và Niall Richard
  Murphy biên tập (các nguyên tắc văn hóa không đổ lỗi mà chủ đề này áp dụng cho việc công bố bảo mật).
- NIST Special Publication 800-40, *Guide to Enterprise Patch Management Planning*: hướng dẫn có thẩm quyền về thực hành khắc phục lỗ
  hổng.
