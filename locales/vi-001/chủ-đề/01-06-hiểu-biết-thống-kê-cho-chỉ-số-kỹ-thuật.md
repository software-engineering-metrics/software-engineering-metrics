# 1.6 Hiểu biết thống kê cho chỉ số kỹ thuật

## Tổng quan và động lực

Bạn không cần bằng thống kê để vận hành tốt một chương trình chỉ số, nhưng bạn cần
tránh một số ít sai lầm cụ thể, phổ biến khiến những chỉ số vốn được quản trị tốt và
đo đạc tốt trở nên gây hiểu lầm thực sự. Một đội có thể làm đúng mọi thứ, gọi tên một
quyết định rõ ràng, tránh định luật Goodhart, nghiêng về kết quả, quản trị quyền sở
hữu, đo đạc đáng tin, mà vẫn rút ra kết luận sai vì đọc một giá trị trung bình ở nơi
cần một phân vị, nhầm nhiễu với xu hướng, hay mắc bẫy một sự trùng hợp khoác áo nguyên
nhân. Chủ đề này là phán đoán thống kê tối thiểu mà cuốn sách giả định người đọc của
mọi chủ đề sau đã có sẵn.

Vấn đề cốt lõi là các chỉ số kỹ thuật thường nhiễu, lệch và cỡ mẫu nhỏ theo chuẩn của
thống kê hình thức. Số lần triển khai hằng tuần của một đội đơn lẻ không phải một đường
cong hình chuông mượt; đó là một nhúm điểm dữ liệu thỉnh thoảng có ngoại lệ lớn (một
bản phát hành lớn, một chuỗi hoàn tác do sự cố). Áp dụng những trực giác ngây thơ vốn
xây cho tập dữ liệu lớn, hành xử tốt vào loại dữ liệu này thường xuyên tạo ra những kết
luận tự tin mà sai. Học cách nhận ra khi nào một con số quá nhiễu để tin, khi nào một
giá trị trung bình đang nói dối bạn, và khi nào hai thứ cùng dịch chuyển không nói gì về
nhân quả không phải là sự nghiêm ngặt tùy chọn, mà là điều phân biệt một chương trình
chỉ số dạy cho tổ chức điều gì đó đúng với một chương trình dạy điều gì đó nghe có vẻ
hợp lý mà sai.

Ở quy mô doanh nghiệp và chính phủ, các sai lầm thống kê cộng dồn vì một kết luận gây
hiểu lầm, một khi được lãnh đạo chấp nhận, sẽ được hành động theo trên nhiều đội trước
khi ai nghĩ đến việc xem xét lại phân tích nền tảng. Một so sánh ngây thơ về mặt thống
kê giữa hai bộ phận, hay giữa trước và sau một cuộc tái cơ cấu lớn, có thể định hình
các quyết định phân bổ nguồn lực nhiều năm chỉ dựa trên nhiễu hoặc một yếu tố gây nhiễu
mà không ai kiểm soát. Chủ đề này tồn tại để làm thất bại đó ít khả năng xảy ra hơn.

## Các nguyên tắc chính

- **Trung vị hoặc phân vị thường cho bạn biết nhiều hơn giá trị trung bình.** Dữ liệu
  kỹ thuật thường xuyên bị lệch bởi các ngoại lệ mà giá trị trung bình hấp thụ còn phân
  vị thì không.
- **Mẫu nhỏ tạo ra những con số nhiễu.** Một tỷ lệ phần trăm tính từ một nhúm sự kiện
  dao động dữ dội vì những lý do chẳng liên quan đến thay đổi thật.
- **Hồi quy về trung bình liên tục đánh lừa con người.** Một giá trị đọc tốt hay xấu
  bất thường có xu hướng được theo sau bởi một giá trị bình thường hơn, dù có hay không
  có can thiệp.
- **Tương quan không phải nhân quả, và các biến gây nhiễu có ở khắp nơi.** Hai chỉ số
  cùng dịch chuyển có thể chia sẻ một nguyên nhân thứ ba ẩn thay vì cái này thúc đẩy
  cái kia.
- **Một [biểu đồ kiểm soát](https://en.wikipedia.org/wiki/Control_chart) hơn một phép
  so sánh trước-sau đơn lẻ.** Thấy được biên độ biến thiên bình thường là điều giúp bạn
  phân biệt một dịch chuyển thật với nhiễu.

## Khuyến nghị

### Mặc định dùng trung vị và phân vị cho dữ liệu lệch

Các chỉ số kỹ thuật dựa trên thời gian, thời gian dẫn, thời gian phục hồi sự cố, độ
trễ phản hồi, hầu như luôn lệch phải: phần lớn giá trị tụ ở mức thấp, với một cái đuôi
dài các ngoại lệ lớn thỉnh thoảng xuất hiện. Một giá trị trung bình bị cái đuôi đó kéo
có thể vẽ nên một bức tranh mà không trường hợp điển hình nào giống. Hãy báo cáo
**trung vị (median)** (giá trị ở giữa, nơi một nửa quan sát cao hơn và một nửa thấp hơn)
cùng **phân vị thứ 90** hoặc **95** (giá trị mà 90% hoặc 95% quan sát nằm dưới nó), hai
thứ cùng nhau cho thấy cả trường hợp điển hình lẫn cái đuôi trường hợp xấu nhất mà một
đội thực sự trải qua. Chủ đề KPI của cuốn sách anh em `software-engineering-guide`, và
mọi chủ đề chỉ số phân phối ở Phần 2 của cuốn sách này, đều giả định thói quen này xuyên
suốt.

### Biết khi nào một mẫu quá nhỏ để tin

Một tỷ lệ thay đổi thất bại tính từ ba lần triển khai trong một tuần chậm không phải là
tín hiệu có ý nghĩa; một lần thất bại duy nhất đẩy tỷ lệ từ 0% lên 33% qua một đêm vì
những lý do có thể chẳng liên quan đến rủi ro nền tảng. Trước khi phản ứng với một chỉ
số dựa trên phần trăm, hãy kiểm tra số đếm nền tảng. Như một quy tắc ngón tay cái thực
tế, hãy coi một tỷ lệ tính từ ít hơn khoảng hai mươi đến ba mươi sự kiện nền tảng là
nhiễu và cần một cửa sổ quan sát dài hơn trước khi rút ra kết luận, và nói rõ điều đó
trên bảng điều khiển thay vì trình bày một tỷ lệ phần trăm biến động, mẫu nhỏ với cùng
độ tự tin như một tỷ lệ ổn định, mẫu lớn.

### Cảnh giác với hồi quy về trung bình trước khi ghi công một can thiệp

Nếu tuần tệ nhất từ trước đến nay về sự cố của một đội được theo sau bởi sự chú ý của
lãnh đạo và một sự cải thiện sau đó, thật hấp dẫn khi ghi công cho can thiệp. Thường thì
một phần của sự cải thiện đó vẫn sẽ xảy ra, vì một giá trị đọc cực đoan bất thường có
xu hướng được theo sau bởi một giá trị điển hình hơn thuần túy như một hiện tượng nhân
tạo thống kê, một hiện tượng gọi là **hồi quy về trung bình (regression to the mean)**.
Hãy phòng ngừa điều này bằng cách so sánh với một đường cơ sở lịch sử dài hơn thay vì
điểm dữ liệu cực đoan đơn lẻ đã thu hút sự chú ý, và bằng cách khiêm tốn đúng mức về
việc quy bao nhiêu phần của bất kỳ sự cải thiện quan sát được cho một hành động cụ thể.

### Tìm các biến gây nhiễu trước khi khẳng định một chỉ số gây ra một kết quả

Khi hai chỉ số cùng dịch chuyển, tần suất triển khai tăng cùng sự hài lòng của khách
hàng, hãy cưỡng lại phản xạ khẳng định cái này gây ra cái kia trước khi cân nhắc một
**biến gây nhiễu (confounding variable)**: một yếu tố thứ ba ẩn thúc đẩy cả hai. Một lần
ra mắt tính năng mới có thể độc lập thúc đẩy cả tần suất triển khai (nhiều bản sửa tiếp
theo hơn) lẫn sự hài lòng (chính tính năng đó), mà không có liên kết nhân quả nào giữa
hai chỉ số. Trước khi trình bày một tương quan như bằng chứng của nhân quả, hãy chủ động
hỏi điều gì khác đã thay đổi cùng lúc có thể giải thích cả hai dịch chuyển.

### Dùng một biểu đồ kiểm soát, không phải một ảnh chụp trước-sau đơn lẻ

Một **biểu đồ kiểm soát (control chart)** vẽ một chỉ số theo thời gian với biên độ biến
thiên bình thường của nó được thể hiện tường minh, thường là các dải quanh một giá trị
trung bình trung tâm. Điều này cho phép bạn phân biệt một dịch chuyển thật, một điểm dữ
liệu hay một chuỗi kéo dài nằm ngoài biên độ bình thường, với nhiễu thông thường mà một
phép so sánh trước-sau đơn lẻ không thể phân biệt. Trước khi tuyên bố "con số đã cải
thiện sau thay đổi", hãy vẽ đủ dữ liệu lịch sử để thấy biến thiên bình thường trông ra
sao, và kiểm tra xem giá trị đọc sau thay đổi có thực sự nằm ngoài đó không.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Giá trị trung bình | Đơn giản, quen thuộc, dễ tính | Bị ngoại lệ làm méo trên dữ liệu kỹ thuật lệch |
| Trung vị và phân vị | Bền với ngoại lệ, cho thấy cả trường hợp điển hình và cái đuôi | Hơi kém quen thuộc với khán giả phi kỹ thuật |
| So sánh trước-sau đơn lẻ | Nhanh, trực quan, dễ trình bày | Dễ bị hồi quy về trung bình và nhiễu |
| Biểu đồ kiểm soát và đường cơ sở dài hơn | Phân biệt đáng tin các dịch chuyển thật với nhiễu | Cần nhiều dữ liệu lịch sử hơn và giải thích nhiều hơn cho khán giả phi kỹ thuật |

Mâu thuẫn trung tâm là **sự đơn giản so với sự nghiêm ngặt**. Giá trị trung bình và các
phép so sánh trước-sau đơn lẻ dễ tính và dễ giải thích hơn, đúng là lý do chúng chi phối
báo cáo thông thường, nhưng chúng cũng là hai kỹ thuật dễ tạo ra kết luận tự tin mà sai
nhất trên loại dữ liệu nhiễu, lệch mà các chỉ số của cuốn sách này sinh ra. Hãy giải
quyết bằng cách mặc định dùng các kỹ thuật nghiêm ngặt hơn, trung vị, phân vị và biểu
đồ kiểm soát, cho mọi quyết định có hệ quả thật, và dành các kỹ thuật đơn giản hơn cho
những cái nhìn thăm dò ít rủi ro, nơi một lần đọc sai tốn rất ít.

## Câu hỏi để thảo luận với đội của bạn

1. **Ô nào trên bảng điều khiển của chúng ta báo cáo một giá trị trung bình ở nơi một
   trung vị hoặc phân vị sẽ kể một câu chuyện đúng hơn?** Các chỉ số kỹ thuật dựa trên
   thời gian hầu như luôn lệch, và một giá trị trung bình trên dữ liệu lệch có thể trông
   ổn trong khi trường hợp điển hình, hoặc cái đuôi trường hợp xấu nhất, kể một câu
   chuyện hoàn toàn khác. Hãy kiểm toán các ô dựa trên thời gian của bạn cụ thể về sự
   thay thế này.

2. **Mẫu nền tảng đằng sau các chỉ số dựa trên phần trăm của chúng ta nhỏ đến mức nào,
   và chúng ta có đối xử với một chỉ số từ mười sự kiện với cùng độ tự tin như một chỉ
   số từ một nghìn không?** Một tỷ lệ mẫu nhỏ biến động được trình bày không kèm số đếm
   nền tảng của nó mời gọi phản ứng thái quá với nhiễu. Hãy kiểm tra các ô tỷ lệ thay
   đổi thất bại và tương tự của bạn về khoảng trống này.

3. **Chúng ta đã bao giờ ghi công một can thiệp cho một sự cải thiện mà hồi quy về trung
   bình vẫn sẽ tạo ra chưa?** Đây là một trong những sai lầm thống kê dễ mắc nhất và khó
   nhận ra nhất sau sự việc, vì can thiệp và sự cải thiện thực sự đã xảy ra theo thứ tự
   đó. Hãy nhìn lại một câu chuyện "chúng tôi đã sửa nó" gần đây và hỏi trung thực xem
   phép so sánh đường cơ sở có đủ dài để loại trừ điều này không.

4. **Ở đâu chúng ta đã cho rằng một chỉ số gây ra chỉ số khác mà không kiểm tra biến gây
   nhiễu?** Hai thứ cùng dịch chuyển là chuyện thường; một thứ gây ra thứ kia là một
   khẳng định mạnh hơn cần nhiều bằng chứng hơn. Hãy chọn một tương quan mà đội bạn hiện
   tin và thử gọi tên một yếu tố gây nhiễu hợp lý giải thích nó mà không cần liên kết
   nhân quả nào.

5. **Chúng ta có đủ dữ liệu lịch sử để biết biến thiên bình thường trông ra sao cho các
   chỉ số quan trọng nhất của mình, hay đang so sánh các điểm đơn lẻ?** Không có cảm
   nhận về biên độ bình thường, bất kỳ giá trị đọc đơn lẻ nào trông đáng lo hay đáng yên
   tâm tùy theo tâm trạng chứ không phải bằng chứng. Hãy bàn xem chỉ số được theo dõi
   nhiều nhất của bạn đã bao giờ được vẽ thành biểu đồ kiểm soát thay vì một con số đơn
   lẻ chưa.

6. **Hiện chúng ta truyền đạt sự không chắc chắn cho các bên liên quan phi kỹ thuật như
   thế nào, và bảng điều khiển có ngụ ý độ chính xác cao hơn dữ liệu thực sự hỗ trợ
   không?** Một biểu đồ không có dấu hiệu nào của biến thiên bình thường hay cỡ mẫu có
   thể khiến ban lãnh đạo phản ứng thái quá với nhiễu hoặc, thường không kém, gạt đi một
   tín hiệu thật như nhiễu. Hãy bàn cách báo cáo của bạn có thể truyền đạt điều này một
   cách trung thực mà không trở nên khó đọc.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Các đội nhỏ tạo ra mẫu nhỏ hầu như ở mọi nơi, nghĩa là lời cảnh báo
về mẫu nhỏ trong chủ đề này quan trọng liên tục. Hãy cưỡng lại việc rút ra kết luận
mạnh từ một tuần tệ hay một tuần tuyệt vời đơn lẻ; chỉ với một nhúm điểm dữ liệu, câu
trả lời trung thực cho "đây có phải xu hướng không" thường là "chúng ta chưa biết".

**Doanh nghiệp nhỏ.** Các bảng điều khiển tích hợp từ công cụ dùng sẵn thường mặc định
dùng giá trị trung bình và so sánh một kỳ vì đó là những thứ đơn giản nhất để tính và
hiển thị. Khi công cụ cho phép, hãy chuyển sang trung vị cho các chỉ số dựa trên thời
gian, và hoài nghi bất kỳ tiêu đề "tăng 40% tháng này" nào tính từ một số đếm nền tảng
nhỏ.

**Doanh nghiệp lớn.** Các sai lầm thống kê ở quy mô này bị nướng vào các quyết định phân
bổ nguồn lực và tái cơ cấu ảnh hưởng đến hàng trăm người. Hãy đầu tư vào các nhà phân
tích hoặc chuyên viên dữ liệu nhúng có thể dựng biểu đồ kiểm soát đúng cách và kiểm tra
các yếu tố gây nhiễu trước khi một phép so sánh giữa các đơn vị kinh doanh, hay trước-sau
một thay đổi lớn, được trình bày cho lãnh đạo như sự thật đã định.

**Chính phủ.** Một phép so sánh ngây thơ về mặt thống kê nuôi một báo cáo công khai hay
một lời biện minh ngân sách có thể có hệ quả thực tế quá cỡ và mời gọi đúng loại soi xét
làm lộ ra phân tích cẩu thả trước công chúng. Hãy áp dụng các kỹ thuật nghiêm ngặt hơn,
biểu đồ kiểm soát, cỡ mẫu được ghi lại, kiểm tra yếu tố gây nhiễu, như một thực hành
thường trực cho bất cứ thứ gì công bố ra bên ngoài, không chỉ như một nỗ lực tốt nhất
thỉnh thoảng.

## Ví dụ

**Doanh nghiệp lớn.** Ban lãnh đạo của một công ty phần mềm ăn mừng sự cải thiện 25% về
tỷ lệ thay đổi thất bại trong tháng sau khi triển khai một chính sách đánh giá mã mới, ghi
công trực tiếp cho chính sách. Xem xét kỹ hơn cho thấy tháng "trước" là một tháng tệ bất
thường, do việc di chuyển hỏng của một đội đơn lẻ, và cỡ mẫu nền tảng ở cả hai tháng đều
dưới ba mươi lần triển khai trên toàn công ty. Một biểu đồ kiểm soát dùng mười hai tháng
lịch sử cho thấy giá trị đọc mới nằm hoàn toàn trong biến thiên bình thường, không phải
một bước nhảy thật, và tác động thực của chính sách, dù có thật, nhỏ hơn nhiều so với con
số tiêu đề gợi ý.

**Chính phủ.** Một cơ quan giao thông công cộng báo cáo một sự cải thiện lớn so với cùng
kỳ năm trước về tính đúng giờ cho một hệ thống lập lịch mới được số hóa, so sánh một quý
"trước" duy nhất với một quý "sau" duy nhất. Một đợt rà soát độc lập thấy rằng quý "trước"
trùng với một đợt đóng cửa xây dựng không liên quan đã kéo hiệu suất xuống khắp toàn mạng
lưới, và một đường cơ sở dài hơn cho thấy tính đúng giờ đã đang phục hồi trước khi hệ
thống mới ra mắt. Báo cáo điều chỉnh của cơ quan dùng một biểu đồ kiểm soát nhiều năm đầy
đủ và quy một sự cải thiện khiêm tốn hơn, nhưng bảo vệ được hơn, cho riêng hệ thống mới.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của hiểu biết thống kê là tránh được sự đi sai hướng: một tổ chức quy đúng một
sự cải thiện, hoặc nhận ra đúng nhiễu là nhiễu, sẽ chi khoản đầu tư tiếp theo ở nơi nó
thực sự giúp ích thay vì đuổi theo một hiệu ứng ma. Ví dụ ở trên là điển hình: một công
ty tin rằng chỉ riêng chính sách đánh giá của mình thúc đẩy cải thiện 25% có thể đầu tư
thiếu vào các đóng góp thật khác, hoặc thổi phồng giá trị của chính sách theo cách đánh
lạc hướng các quyết định tương lai.

Tổng chi phí của sự nghiêm ngặt thống kê chủ yếu là một sự thay đổi thói quen hơn là công
cụ mới: chọn trung vị thay vì trung bình, kiểm tra cỡ mẫu trước khi phản ứng, vẽ đường cơ
sở dài hơn trước khi tuyên bố chiến thắng. Những thói quen này tốn ít để áp dụng và ngăn
chi phí lớn hơn nhiều, khó phát hiện hơn của những quyết định dựa trên kết luận tự tin mà
sai.

## Phản mẫu và cạm bẫy

- **Báo cáo giá trị trung bình trên dữ liệu thời gian lệch:** giấu trường hợp điển hình
  và cái đuôi sau một con số đơn lẻ gây hiểu lầm.
- **Phản ứng với một tỷ lệ phần trăm mà cỡ mẫu không nhìn thấy:** coi nhiễu từ một nhúm
  sự kiện như một xu hướng ổn định, có ý nghĩa.
- **Ghi công một can thiệp mà không loại trừ hồi quy về trung bình:** một sai lầm phổ
  biến, dễ mắc, khó nhận ra.
- **Khẳng định nhân quả từ tương quan mà không xét các yếu tố gây nhiễu:** phóng đại
  những gì dữ liệu thực sự hỗ trợ.
- **So sánh một ảnh chụp trước-sau đơn lẻ thay vì vẽ đường cơ sở dài hơn:** không phân
  biệt được dịch chuyển thật với biến thiên thông thường.
- **Ngụ ý độ chính xác cao hơn dữ liệu hỗ trợ trong báo cáo hướng lãnh đạo:** mời gọi
  phản ứng thái quá với nhiễu hay gạt bỏ một tín hiệu thật.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Các chỉ số được báo cáo dưới dạng giá trị trung bình thô và ảnh
  chụp trước-sau đơn lẻ, không chú ý đến cỡ mẫu, độ lệch hay biến thiên đường cơ sở.
- **Mức 2, Phát triển:** Một số nhà phân tích áp dụng trung vị hoặc phân vị một cách
  không chính thức, nhưng không có thực hành nhất quán của tổ chức và hiếm khi kiểm tra
  các yếu tố gây nhiễu.
- **Mức 3, Chuẩn hóa:** Trung vị và phân vị là mặc định cho các chỉ số dựa trên thời
  gian bị lệch; cỡ mẫu được hiển thị bên cạnh các chỉ số dựa trên phần trăm trên toàn
  tổ chức.
- **Mức 4, Quản lý:** Biểu đồ kiểm soát với đường cơ sở lịch sử là thực hành chuẩn cho
  bất kỳ khẳng định nào về một dịch chuyển thật; các biến gây nhiễu được chủ động xét
  đến trước khi đưa ra khẳng định nhân quả trong báo cáo.
- **Mức 5, Điều phối:** Sự nghiêm ngặt thống kê được xây vào chính công cụ, bảng điều
  khiển mặc định hiển thị phân vị và dải kiểm soát, và tổ chức có thể chứng minh rằng
  một quyết định cụ thể trong quá khứ đã được sửa vì một cách đọc ngây thơ về mặt thống
  kê bị bắt trước khi nó định hình chiến lược.

## Ý tưởng để thảo luận

1. Tiêu đề bảng điều khiển hiện tại nào của chúng ta sẽ trông khác nếu thay một giá trị trung bình bằng một trung vị?
2. Chúng ta đã bao giờ đổi một quyết định vì một tỷ lệ phần trăm hóa ra dựa trên mẫu nhỏ hơn nhiều so với giả định chưa?
3. Câu chuyện "chúng tôi đã cải thiện chỉ số này" gần đây nào chúng ta nên xem xét lại về hồi quy về trung bình?
4. Ở đâu hai chỉ số của chúng ta có thể tương quan qua một nguyên nhân thứ ba ẩn thay vì cái này thúc đẩy cái kia?
5. Các biểu đồ quan trọng nhất của chúng ta có hiển thị biên độ biến thiên bình thường, hay chỉ một đường xu hướng đơn lẻ?

## Điểm chính cần nhớ

- Ưu tiên **trung vị và phân vị** hơn giá trị trung bình cho các chỉ số kỹ thuật dựa trên
  thời gian bị lệch.
- Coi một **tỷ lệ phần trăm từ mẫu nhỏ** là nhiễu, và nói rõ điều đó thay vì phản ứng với
  nó như một xu hướng ổn định.
- Cảnh giác với **hồi quy về trung bình** trước khi ghi công một can thiệp cho sự cải
  thiện theo sau một giá trị đọc tệ bất thường.
- **Tương quan không phải nhân quả**; hãy chủ động tìm các biến gây nhiễu trước khi đưa
  ra khẳng định nhân quả.
- Dùng một **biểu đồ kiểm soát với đường cơ sở lịch sử thật**, không phải một ảnh chụp
  trước-sau đơn lẻ, để phân biệt một dịch chuyển thật với nhiễu thông thường.

## Tài liệu tham khảo và đọc thêm

- *The Signal and the Noise*, của Nate Silver (phân biệt tín hiệu thật với nhiễu trong
  dữ liệu không hoàn hảo).
- *How to Measure Anything*, của Douglas W. Hubbard (suy luận thống kê cho đo lường tổ
  chức).
- *Understanding Variation: The Key to Managing Chaos*, của Donald J. Wheeler (biểu đồ
  kiểm soát và sự phân biệt giữa biến thiên nguyên nhân chung và nguyên nhân đặc biệt).
- *Thinking, Fast and Slow*, của Daniel Kahneman (các thiên kiến nhận thức gồm hồi quy
  về trung bình và ảo tưởng về câu chuyện nhân quả).
- *The Visual Display of Quantitative Information*, của Edward R. Tufte (trình bày dữ
  liệu định lượng trung thực, toàn vẹn).
