# 8.1 Thiết kế bảng điều khiển chỉ số kỹ thuật

## Tổng quan và động lực

Mọi chỉ số mà cuốn sách này đã bàn rốt cuộc phải sống ở đâu đó mà người thật thực sự nhìn vào, và một [bảng điều khiển](https://en.wikipedia.org/wiki/Dashboard_(business))
thiết kế tồi có thể hủy công sức cẩn thận của mọi chủ đề trước: các chỉ số trung thực, được quản trị tốt, ghép với rào chắn mà được trình
bày thiếu trung thực, lộn xộn, hay cho sai đối tượng sẽ tạo ra đúng sự bối rối và mất lòng tin mà cuốn sách này đã nỗ lực ngăn. Chủ đề
này nói về nghề thủ công cụ thể của thiết kế bảng điều khiển: chọn hiển thị gì cho ai, trực quan hóa nó một cách trung thực, và cấu trúc
cả sản phẩm sao cho nó thực sự được dùng để đưa ra quyết định thay vì bị bỏ qua hay, tệ hơn, bị đọc sai.

Kỷ luật trung tâm mà chủ đề này khuyến nghị là thiết kế theo đối tượng cụ thể. Một bảng điều khiển được xây cho buổi họp đứng hằng ngày
của một đội kỹ thuật cần các chỉ số khác, độ chi tiết khác và mật độ hình ảnh khác so với bảng điều khiển cho buổi rà soát điều hành hằng
quý, và một bảng điều khiển một-cỡ-cho-tất-cả cố phục vụ cả hai đối tượng thường không phục vụ tốt cái nào. Chủ đề này coi thiết kế bảng
điều khiển như một kỷ luật thiết kế thật sự, không chỉ là việc báo cáo nghĩ sau, dựa vào các nguyên tắc trung thực thống kê của chủ đề 1.6
xuyên suốt: mỗi lựa chọn trực quan hóa hoặc giúp hoặc cản trở khả năng của người đọc rút ra kết luận đúng từ dữ liệu.

Với các đội lớn, thiết kế bảng điều khiển là nơi các rào chắn cấp chỉ số riêng lẻ của cuốn sách này hoặc sống sót vào thực hành hoặc bị
mất. Các tổ chức doanh nghiệp vận hành hàng chục bảng điều khiển của các đội cần sự nhất quán mà không cứng nhắc, các chuẩn chung vẫn cho
phép đáp ứng nhu cầu cụ thể của từng đối tượng; các tổ chức chính phủ, mà bảng điều khiển có thể chịu sự soi xét công khai hay làm cơ
sở cho báo cáo giám sát, cần các chuẩn trực quan hóa trung thực mà chủ đề này khuyến nghị được áp dụng đặc biệt chặt chẽ, vì một biểu
đồ gây hiểu lầm bị người rà soát bên ngoài phát hiện làm tổn hại uy tín vượt xa chỉ số cụ thể liên quan.

## Các nguyên tắc chính

- **Hãy thiết kế cho một đối tượng và quyết định cụ thể, không phải cho độ bao phủ toàn diện.** Một bảng điều khiển cố phục vụ mọi người
  thường không phục vụ tốt ai.
- **Mỗi lựa chọn trực quan hóa hoặc giúp hoặc chủ động gây hiểu lầm.** Hãy áp dụng chặt chẽ sự trung thực thống kê của chủ đề 1.6: xu
  hướng thật, trục trung thực, sự bất định hiển thị.
- **Ít chỉ số được chọn tốt thắng độ bao phủ toàn diện.** Nguyên tắc xuyên suốt của cuốn sách này, từ chủ đề 1.1 trở đi, áp dụng trực
  tiếp cho thiết kế bảng điều khiển.
- **Một bảng điều khiển cần một người chịu trách nhiệm và một nhịp xem xét**, đúng như mọi chỉ số được quản trị khác (chủ đề 1.4), nếu
  không nó mục rữa thành một sản phẩm không được bảo trì, không đáng tin.
- **Các cặp rào chắn thuộc về cùng một góc nhìn.** Không bao giờ tách một chỉ số có động cơ khuyến khích khỏi rào chắn của nó sang các
  bảng điều khiển hay các phần khác nhau.

## Khuyến nghị

### Thiết kế các bảng điều khiển riêng biệt cho các đối tượng và quyết định riêng biệt

Hãy xây các góc nhìn riêng, đặc thù theo mục đích thay vì một bảng điều khiển phục vụ mọi đối tượng: một bảng điều khiển vận hành cấp đội
(nhịp hằng ngày hoặc hằng tuần, các chỉ số phân phối và chất lượng chi tiết cho chính đội dùng), một bảng điều khiển lãnh đạo (nhịp hằng
tháng hoặc hằng quý, gia quyền theo kết quả theo chủ đề 7.4, ít chỉ số hơn, nhiều bối cảnh hơn), và, khi liên quan, một bảng điều khiển
hướng ra ngoài (cho khách hàng, cơ quan giám sát hay công chúng, được quản trị cẩn thận theo độ chặt chẽ tỷ lệ với hệ quả của chủ đề
1.4). Mỗi cái phục vụ một quyết định khác nhau và nên được thiết kế riêng cho quyết định đó, không phải như một góc nhìn lọc từ một bảng
điều khiển chủ duy nhất.

### Áp dụng nhất quán các chuẩn trực quan hóa trung thực

Hãy theo các nguyên tắc trung thực thống kê của chủ đề 1.6 như yêu cầu thiết kế cứng, không phải đánh bóng tùy chọn: bắt đầu trục giá
trị từ không trừ khi có một ngoại lệ được nêu, hiển thị được ghi chép, hiển thị xu hướng theo thời gian thay vì một ảnh chụp đơn lẻ, dùng
trung vị và bách phân vị thay vì trung bình cho dữ liệu lệch, và chú thích bối cảnh (triển khai, sự cố, thay đổi tổ chức) để người đọc
phân biệt được một sự dịch chuyển thật với nhiễu. Hãy tránh các thao túng biểu đồ cụ thể mà chủ đề 1.6 đã gọi tên trực tiếp: trục kép
ngụ ý tương quan sai, khoảng ngày được chọn lọc, và hiệu ứng 3D bóp méo tỷ lệ.

### Không bao giờ tách một chỉ số khỏi rào chắn ghép đôi của nó sang các góc nhìn khác nhau

Theo nguyên tắc ghép rào chắn của chủ đề 1.2 như một quy tắc thiết kế bảng điều khiển cứng: tần suất triển khai và tỷ lệ thay đổi thất
bại (chủ đề 2.10) thuộc về cùng một góc nhìn, luôn hiển thị cùng nhau, không bao giờ bị tách giữa một bảng điều khiển "tốc độ" và một bảng
điều khiển "chất lượng" riêng mà các đối tượng khác nhau có thể xem riêng lẻ. Đây không phải một sở thích bố cục nhỏ; việc tách một chỉ
số khỏi rào chắn của nó sang các bảng điều khiển khác nhau tái tạo đúng rủi ro phơi bày động cơ mà chủ đề 1.2 cảnh báo, dù cả hai con
số đều được theo dõi đâu đó về mặt kỹ thuật.

### Giao một người chịu trách nhiệm có tên và một nhịp xem xét cho mọi bảng điều khiển

Hãy áp dụng trực tiếp kỷ luật quản trị của chủ đề 1.4 cho chính sản phẩm bảng điều khiển, không chỉ cho từng chỉ số nó hiển thị: nêu tên
một người chịu trách nhiệm về độ chính xác và sự liên quan liên tục của bảng điều khiển, và đặt một nhịp xem xét trong đó các chỉ số
được thêm, ngừng hay cân nhắc lại. Một bảng điều khiển không có người chịu trách nhiệm mục rữa đúng như một chỉ số không có chủ (chủ đề
1.4), tích tụ các ô lỗi thời mà không ai có thẩm quyền hay trách nhiệm cắt tỉa.

### Xây một tuyên bố tường minh, hiển thị về điều bảng điều khiển không dùng cho

Theo sự phân biệt chẩn đoán-so-với-đánh-giá của chủ đề 1.1, hãy nêu trực tiếp và hiển thị trên mọi bảng điều khiển có các chỉ số có thể
bị dùng sai để đánh giá cá nhân chính xác điều bảng điều khiển không dùng cho: "các chỉ số này mô tả sức khỏe của đội và hệ thống; chúng
không được dùng trong đánh giá hiệu suất cá nhân." Tuyên bố tường minh này, áp dụng đặc biệt cho bất kỳ bảng điều khiển nào chứa dữ liệu
hoạt động (chủ đề 3.4) hay dữ liệu tải trực ca (chủ đề 6.3), là một lựa chọn thiết kế nhỏ với tác dụng lớn trong việc ngăn chính sự trôi
dạt sang đánh giá mà cuốn sách này cảnh báo xuyên suốt.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Một bảng điều khiển toàn diện duy nhất cho mọi đối tượng | Đơn giản để xây và bảo trì một sản phẩm | Không phục vụ tốt đối tượng cụ thể nào; áp đảo với một số người, không đủ với người khác |
| Các bảng điều khiển theo đối tượng | Mỗi cái phục vụ tốt quyết định thật của nó | Nhiều sản phẩm hơn để xây, bảo trì và giữ nhất quán |
| Độ bao phủ chỉ số toàn diện trên mọi góc nhìn | Không bỏ sót gì | Mệt mỏi vì bảng điều khiển; chôn vùi các chỉ số thực sự quan trọng cho quyết định của đối tượng đó |
| Chọn chỉ số tối thiểu, theo quyết định cho mỗi bảng điều khiển | Tập trung, hành động được, dễ tin hơn | Cần kỷ luật tuyển chọn có chủ đích và có rủi ro bỏ sót điều liên quan |

Sự căng thẳng trung tâm là **tính toàn diện so với sự tập trung**, sự căng thẳng nền tảng của chủ đề 1.1 áp dụng riêng cho thiết kế bảng
điều khiển. Một bảng điều khiển toàn diện cảm giác an toàn hơn, không bỏ sót gì, nhưng nó thường phục vụ đối tượng thật của mình kém hơn
một bảng điều khiển tập trung được xây riêng quanh các quyết định mà đối tượng đó cần đưa ra. Hãy giải quyết sự căng thẳng bằng cách xây
nhiều bảng điều khiển đặc thù theo mục đích thay vì một cái toàn diện, chấp nhận chi phí bảo trì thêm khiêm tốn của vài sản phẩm tập
trung để đổi lấy việc mỗi cái thực sự hữu ích cho đối tượng dự kiến của nó.

## Câu hỏi để thảo luận với đội của bạn

1. **Bảng điều khiển hiện tại của chúng ta có cố phục vụ nhiều đối tượng cùng lúc không, và nếu có, nó thực sự phục vụ tốt ai?** Hãy đi
   qua bảng điều khiển hiện có của bạn và xác định đối tượng chính thực tế so với đối tượng dự kiến; sự lệch pha ở đây là phổ biến và
   đáng gọi tên trực tiếp.

2. **Có bảng điều khiển nào của chúng ta tách một chỉ số có động cơ khuyến khích khỏi rào chắn ghép đôi của nó sang các góc nhìn khác nhau
   không?** Hãy kiểm toán các bảng điều khiển hiện tại của bạn riêng cho mẫu hình này, kiểm tra từng chỉ số DORA của Phần 2 và các cặp của
   chúng làm điểm khởi đầu.

3. **Các trực quan hóa của bảng điều khiển có qua được các chuẩn trực quan hóa trung thực của chủ đề 1.6 không: trục từ không, xu hướng
   hơn ảnh chụp, trung vị hơn trung bình cho dữ liệu lệch?** Hãy rà soát các biểu đồ hiện tại thực tế của bạn theo danh sách kiểm tra
   này một cách trực tiếp.

4. **Mọi bảng điều khiển chúng ta duy trì có một người chịu trách nhiệm có tên và một nhịp xem xét không, hay một số đơn giản tồn tại mà
   không ai chịu trách nhiệm giữ chúng chính xác và liên quan?** Nếu bất kỳ bảng điều khiển nào thiếu người chịu trách nhiệm có tên,
   khoảng trống đó đáng đóng ngay, vì một bảng điều khiển không có chủ mục rữa đúng như một chỉ số không có chủ.

5. **Có bảng điều khiển nào mà các chỉ số có thể bị dùng sai để đánh giá cá nhân nêu tường minh điều nó không dùng cho không?** Hãy kiểm
   tra riêng bất kỳ bảng điều khiển nào chứa dữ liệu hoạt động hay tải trực ca về tuyên bố tường minh này.

6. **Nếu hôm nay chúng ta thiết kế lại các bảng điều khiển từ đầu, từng đối tượng một, bắt đầu từ quyết định mà mỗi đối tượng cần đưa ra,
   kết quả sẽ khác bao nhiêu so với hiện có?** Thí nghiệm tư duy này thường cho thấy bao nhiêu cấu trúc bảng điều khiển đã tích tụ do
   quán tính hơn là thiết kế có chủ đích.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Một bảng điều khiển đơn giản, duy nhất thường phù hợp ở quy mô này, vì cả đội và lãnh đạo thường là cùng một nhóm nhỏ
người đưa ra những quyết định phần lớn giống nhau. Hãy tập trung vào các chuẩn trực quan hóa trung thực và tuyên bố không-dùng-để-đánh-giá
tường minh ngay cả ở quy mô nhỏ, vì những thói quen này dễ thiết lập sớm hơn nhiều so với bổ sung sau.

**Doanh nghiệp nhỏ.** Hầu hết công cụ có sẵn cung cấp các bảng điều khiển mặc định hợp lý; kỷ luật chính là tuyển chọn chúng xuống còn
vài chỉ số thực sự thông tin cho một quyết định thật cho doanh nghiệp cụ thể của bạn, thay vì hiển thị mọi chỉ số mà công cụ tình cờ tính
theo mặc định.

**Doanh nghiệp lớn.** Nhất quán mà không cứng nhắc là thách thức trung tâm ở đây: hàng chục bảng điều khiển của các đội cần đủ chuẩn
chung (quy tắc trực quan hóa trung thực, ghép rào chắn, kỷ luật chịu trách nhiệm) để đáng tin và so sánh được, trong khi vẫn cho phép nhu
cầu vận hành cụ thể của từng đội định hình góc nhìn của riêng mình. Hãy đầu tư vào một chuẩn thiết kế bảng điều khiển chung, được thực
thi qua quản trị (chủ đề 1.4), thay vì hoặc một mẫu cứng nhắc một-cỡ-cho-tất-cả hoặc các bảng điều khiển cục bộ hoàn toàn không có cấu
trúc, không nhất quán.

**Chính phủ.** Các bảng điều khiển đối mặt sự soi xét bên ngoài hay giám sát cần sự chặt chẽ đặc biệt trong trực quan hóa trung thực và
tài liệu quản trị tường minh, vì một biểu đồ gây hiểu lầm bị người rà soát bên ngoài phát hiện làm tổn hại uy tín thể chế vượt xa chỉ
số cụ thể liên quan. Hãy áp dụng chuẩn cao nhất của các khuyến nghị trong chủ đề này cho mọi bảng điều khiển hướng ra ngoài.

## Ví dụ

**Doanh nghiệp lớn.** Một công ty công nghệ hậu cần trong nhiều năm duy trì một bảng điều khiển "sức khỏe kỹ thuật" duy nhất do cả các
đội kỹ thuật riêng lẻ lẫn đội lãnh đạo điều hành xem, với hơn bốn mươi ô bao quát mọi thứ từ số commit cá nhân đến kết quả kinh doanh hằng
quý. Cả hai đối tượng đều không thấy nó thực sự hữu ích: kỹ sư bỏ qua các ô kết quả kinh doanh vì không liên quan đến công việc hằng
ngày, còn lãnh đạo bị áp đảo bởi các chỉ số phân phối chi tiết không có bối cảnh để diễn giải. Việc tách nó thành một bảng điều khiển
vận hành đội tập trung sáu ô và một bảng điều khiển lãnh đạo riêng tám ô, cả hai theo các chuẩn ghép rào chắn và trực quan hóa trung thực
của chủ đề này, đã tạo ra mức tương tác cao hơn đo được và, quan trọng, lần đầu tiên lãnh đạo báo cáo có thể giải thích các con số có
nghĩa gì khi được cấp lãnh đạo của chính họ hỏi.

**Chính phủ.** Bảng điều khiển dịch vụ số hướng công chúng của một chính quyền tiểu bang từng bị chỉ trích công khai vì một biểu đồ cho
thấy thời gian xử lý "trung bình" dùng trục y bị cắt làm phóng đại trực quan một cải thiện khiêm tốn, một vi phạm các chuẩn trực quan
hóa trung thực của chủ đề 1.6 mà một nhà báo công nghệ bên ngoài đã bắt và đưa tin. Bảng điều khiển thiết kế lại của cơ quan, được xây
tường minh theo các chuẩn của chủ đề này, trục từ không, trung vị thay vì trung bình cho dữ liệu thời gian xử lý lệch phải, và bối cảnh
được chú thích rõ ràng cho mọi thay đổi đáng chú ý, được khen riêng trong một bài báo tiếp theo như một hình mẫu về trình bày dữ liệu khu
vực công minh bạch, trực tiếp sửa chữa uy tín mà biểu đồ gây hiểu lầm trước đó đã làm tổn hại.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của các bảng điều khiển được thiết kế có chủ đích, theo đối tượng, trung thực là mức sử dụng thật và lòng tin thật: ví dụ công
ty hậu cần ở trên cho thấy cái giá trực tiếp của một bảng điều khiển đơn lẻ thiết kế tồi, mức tương tác thấp ở cả hai đối tượng dự kiến,
và lợi ích trực tiếp của việc thiết kế lại, mức tương tác cao hơn đo được một khi mỗi đối tượng có một góc nhìn thực sự được xây cho các
quyết định của riêng họ.

Tổng chi phí sở hữu là công sức thiết kế và bảo trì cho nhiều bảng điều khiển đặc thù theo mục đích thay vì một sản phẩm toàn diện, cộng
kỷ luật quản trị liên tục (người chịu trách nhiệm có tên, nhịp xem xét) mà chủ đề này khuyến nghị. Chi phí đó khiêm tốn so với rủi ro
một bảng điều khiển không được dùng, hoặc tệ hơn, một bảng điều khiển chủ động gây hiểu lầm đối tượng và làm tổn hại uy tín, như ví dụ
chính phủ ở trên cho thấy cụ thể.

## Phản mẫu và cạm bẫy

- **Một bảng điều khiển đơn lẻ cố phục vụ mọi đối tượng:** thường không phục vụ tốt ai.
- **Tách một chỉ số có động cơ khuyến khích khỏi rào chắn của nó sang các góc nhìn khác nhau:** tái tạo rủi ro phơi bày động cơ mà chủ
  đề 1.2 cảnh báo.
- **Các lựa chọn trực quan hóa thiếu trung thực:** trục bị cắt, khoảng ngày chọn lọc và trục kép đều gây hiểu lầm cho người đọc, đôi
  khi với hậu quả danh tiếng thật.
- **Không có người chịu trách nhiệm có tên hay nhịp xem xét cho chính bảng điều khiển:** sản phẩm mục rữa đúng như một chỉ số không có
  chủ.
- **Không có tuyên bố tường minh về điều bảng điều khiển không dùng cho:** mời gọi sự trôi dạt sang đánh giá mà cuốn sách này cảnh báo
  xuyên suốt.
- **Bao phủ ô toàn diện thay vì tuyển chọn tập trung, theo quyết định:** tạo ra mệt mỏi vì bảng điều khiển và chôn vùi điều thực sự quan
  trọng.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Một bảng điều khiển đơn lẻ, không tuyển chọn, nếu có, phục vụ mọi đối tượng kém, không có chuẩn trực quan hóa
  trung thực hay ghép rào chắn.
- **Cấp 2, Phát triển:** Có một số góc nhìn theo đối tượng, nhưng chuẩn trực quan hóa không nhất quán và quyền chịu trách nhiệm không rõ.
- **Cấp 3, Chuẩn hóa:** Các bảng điều khiển theo đối tượng với chuẩn trực quan hóa trung thực nhất quán và ghép rào chắn được thiết lập
  trên toàn tổ chức, mỗi cái có một người chịu trách nhiệm có tên.
- **Cấp 4, Quản lý:** Các bảng điều khiển được xem xét theo nhịp đều đặn, với tuyên bố không-dùng-để-đánh-giá tường minh khi liên quan,
  và các ô lỗi thời được cắt tỉa tích cực.
- **Cấp 5, Điều phối:** Thực hành thiết kế bảng điều khiển của tổ chức là một năng lực đáng tin, được quản trị tốt, và tổ chức có thể
  chỉ ra những trường hợp cụ thể nơi các bảng điều khiển trung thực, thiết kế tốt đã sửa chữa hoặc xây dựng lòng tin của các bên liên
  quan.

## Ý tưởng để thảo luận

1. Đối tượng chính thực tế của bảng điều khiển hiện tại của chúng ta là ai, so với đối tượng dự kiến?
2. Có bảng điều khiển nào của chúng ta tách một chỉ số khỏi rào chắn của nó không?
3. Các biểu đồ hiện tại của chúng ta có qua được một cuộc kiểm toán trực quan hóa trung thực không?
4. Mọi bảng điều khiển chúng ta duy trì có một người chịu trách nhiệm có tên, rõ ràng không?
5. Một thiết kế lại từ đầu, đối tượng trước tiên, các bảng điều khiển của chúng ta sẽ trông ra sao?

## Những điểm chính cần nhớ

- Hãy thiết kế **các bảng điều khiển theo đối tượng** cho các quyết định cụ thể, không phải một sản phẩm toàn diện cố phục vụ mọi người.
- Hãy áp dụng **các chuẩn trực quan hóa trung thực** (chủ đề 1.6) như yêu cầu cứng: trục từ không, xu hướng hơn ảnh chụp, trung vị hơn
  trung bình cho dữ liệu lệch.
- **Không bao giờ tách một chỉ số có động cơ khuyến khích khỏi rào chắn của nó** sang các góc nhìn khác nhau; hãy giữ các cặp rào chắn
  trên cùng một bảng điều khiển.
- Hãy giao **một người chịu trách nhiệm có tên và một nhịp xem xét** cho mọi bảng điều khiển, đúng như chủ đề 1.4 yêu cầu với mọi chỉ
  số được quản trị.
- Hãy nêu tường minh **điều bảng điều khiển không dùng cho**, đặc biệt ở nơi dữ liệu hoạt động hay tải vận hành có thể bị dùng sai để
  đánh giá cá nhân.

## Tài liệu tham khảo và đọc thêm

- *The Visual Display of Quantitative Information*, của Edward R. Tufte (văn bản nền tảng về trực quan hóa dữ liệu trung thực, có tính
  chính trực cao).
- *Storytelling with Data*, của Cole Nussbaumer Knaflic (thiết kế bảng điều khiển và biểu đồ thực tế cho đối tượng kinh doanh).
- *Information Dashboard Design*, của Stephen Few (các nguyên tắc thiết kế riêng cho bảng điều khiển để truyền đạt hiệu quả, trung thực).
- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble, và Gene Kim (kỷ luật ghép đôi chỉ số mà chủ đề
  này áp dụng trực tiếp vào bố cục bảng điều khiển).
