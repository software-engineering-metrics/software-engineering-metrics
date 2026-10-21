# 1.5 Nguồn dữ liệu và công cụ đo đạc

## Tổng quan và động lực

Một chỉ số chỉ đáng tin bằng dữ liệu bên dưới nó, và phần lớn các chương trình chỉ
số dành nhiều công sức thiết kế bảng điều khiển hơn nhiều so với kiểm chứng đường ống
nuôi chúng. Điều này là ngược. Một biểu đồ thiết kế đẹp đặt trên việc đo đạc không
nhất quán, tự báo cáo, hoặc hỏng thầm lặng còn tệ hơn không có biểu đồ nào, vì nó trông
đầy thẩm quyền trong khi sai. Chủ đề này nói về nền tảng thiếu hào nhoáng mà phần còn
lại của cuốn sách giả định: dữ liệu kỹ thuật thực sự đến từ đâu, khi nào nên tin việc
đo đạc tự động hơn tự báo cáo, và những thất bại về chất lượng dữ liệu lặng lẽ làm mất
hiệu lực một chỉ số trước khi ai kịp nhận ra.

Dữ liệu kỹ thuật phần mềm đến từ một nhúm loại nguồn, mỗi loại có đặc điểm độ tin cậy
khác nhau. Hệ thống kiểm soát phiên bản và các đường ống [CI/CD](https://en.wikipedia.org/wiki/CI/CD)
tạo ra các bản ghi khách quan, có dấu thời gian, khó làm giả về những gì thực sự đã
xảy ra. Công cụ theo dõi vấn đề và quản lý dự án tạo ra các bản ghi phụ thuộc vào việc
con người cập nhật trạng thái đúng và kịp thời, điều họ thường làm không nhất quán.
Khảo sát tạo ra dữ liệu tự báo cáo vô giá cho những thứ không hệ thống nào quan sát
được, như sự hài lòng, nhưng chịu thiên kiến hồi tưởng và hiệu ứng mong muốn xã hội. Các
nền tảng quan sát tạo ra dữ liệu viễn trắc cấp hệ thống, khách quan nhưng chỉ bao quát
những gì đã được đo đạc. Biết dữ liệu của một chỉ số thuộc loại nào cho bạn biết nên tin
nó bao nhiêu và cần cảnh giác những kiểu thất bại nào.

Ở quy mô doanh nghiệp và chính phủ, các vấn đề chất lượng dữ liệu cộng dồn vì khoảng
cách giữa nguồn gốc của dữ liệu và việc dùng cuối cùng của nó trong một bảng điều khiển
tăng lên qua nhiều hệ thống, tích hợp và biến đổi. Một trường có nghĩa này trong hệ
thống nguồn có thể mang nghĩa hơi khác khi đến tầng báo cáo, và không ai ở hạ nguồn nhận
ra vì con số vẫn trông hợp lý. Làm đúng việc đo đạc kém thú vị hơn làm đúng các khung,
nhưng đó là nền tảng mà mọi thứ khác trong cuốn sách này đứng trên.

## Các nguyên tắc chính

- **Ưu tiên đo đạc tự động hơn tự báo cáo ở bất cứ nơi nào hệ thống có thể quan sát
  trực tiếp sự kiện.** Dấu thời gian triển khai từ đường ống đáng tin hơn số lần triển
  khai do đội tự báo cáo.
- **Chỉ dùng tự báo cáo cho những gì không thể quan sát trực tiếp.** Sự hài lòng, ma sát
  cảm nhận được và phúc lợi không có hệ thống ghi chép nào thay thế; hãy hỏi trực tiếp
  và thiết kế khảo sát cho tốt (chủ đề 3.7). Hãy dành tự báo cáo riêng cho loại đó.
- **Dữ liệu của mỗi chỉ số có một hệ thống nguồn, một phương pháp thu thập và một kiểu
  thất bại đã biết.** Hãy ghi lại cả ba, không chỉ định nghĩa.
- **Chất lượng dữ liệu suy giảm một cách thầm lặng.** Một đường ống từng hoạt động đúng
  một năm trước có thể đang hỏng lặng lẽ hôm nay, và một bảng điều khiển sẽ cứ hiển thị
  một con số sai mà không phàn nàn.
- **Đo đạc tại điểm của sự thật, không phải sau một phép chuyển dịch.** Mỗi chặng giữa
  sự kiện và bảng điều khiển là một cơ hội để ý nghĩa trôi đi.

## Khuyến nghị

### Ánh xạ mỗi chỉ số về hệ thống nguồn thực của nó trước khi tin

Với mỗi chỉ số trên bảng điều khiển, hãy gọi tên hệ thống cụ thể tạo ra sự kiện nền
tảng: đường ống CI/CD cho sự kiện triển khai, máy chủ kiểm soát phiên bản cho sự kiện
commit và gộp, công cụ theo dõi sự cố cho bản ghi gián đoạn, nền tảng khảo sát cho sự
hài lòng tự báo cáo. Nếu bạn không gọi được tên chính xác hệ thống, bạn thực sự không
biết con số đến từ đâu, và bạn không thể đánh giá độ tin cậy của nó. Phép ánh xạ này là
điều kiện tiên quyết cho hiến chương quản trị ở chủ đề 1.4, không phải một bài tập
riêng.

### Đo đạc tại sự kiện, không phải tại báo cáo

Dữ liệu đáng tin nhất ghi lại sự kiện một cách tự động vào đúng thời điểm nó xảy ra:
một đường ống ghi lại một lần triển khai ngay khi nó hoàn tất, một hệ thống kiểm soát
phiên bản ghi lại một lần gộp ngay khi nó hạ cánh. Dữ liệu phụ thuộc vào việc con người
nhớ cập nhật một trường trạng thái sau đó, đánh dấu một phiếu "xong", ghi tay một lần
triển khai vào bảng tính, suy giảm độ chính xác khi nó càng xa sự kiện thực và người
chịu trách nhiệm càng bận. Bất cứ nơi nào có một sự kiện tự động, hãy ưu tiên nó hơn một
đại diện do con người báo cáo cho cùng một sự việc.

### Dành khảo sát cho những gì chỉ con người mới nói được

Một số thứ thực sự không thể quan sát từ dữ liệu viễn trắc của hệ thống: một kỹ sư có
cảm thấy công việc của mình có ý nghĩa không, một quy trình có gây bực bội không, rủi
ro kiệt sức có đang tăng không. Những điều này cần hỏi trực tiếp, và một khảo sát thiết
kế tốt (chủ đề 3.7 trình bày cơ chế) là công cụ đúng. Sai lầm là dùng tự báo cáo cho
những thứ một hệ thống có thể quan sát trực tiếp, yêu cầu các kỹ sư ước lượng tần suất
triển khai của chính họ thay vì lấy nó từ đường ống, điều đưa nhiễu và thiên kiến không
cần thiết vào dữ liệu lẽ ra có thể khách quan.

### Xây các kiểm tra chất lượng dữ liệu vào chính đường ống

Hãy đối xử với các đường ống chỉ số với cùng sự nghiêm ngặt như mã production: thêm các
kiểm tra tự động cảnh báo khi một nguồn ngừng gửi dữ liệu, khi phân phối của một trường
dịch chuyển bất ngờ, hoặc khi một số đếm tụt về không bất ngờ. Một bảng điều khiển lặng
lẽ hiển thị dữ liệu cũ hay hỏng như thể nó là hiện tại còn tệ hơn một bảng điều khiển
hiển thị rõ "không có dữ liệu", vì cái đầu làm xói mòn niềm tin một cách vô hình trong
khi cái sau ít nhất nói sự thật về giới hạn của chính nó.

### Ghi lại phương pháp thu thập bên cạnh định nghĩa

Định nghĩa của một chỉ số ("thời gian dẫn của thay đổi") chưa đầy đủ nếu thiếu phương
pháp thu thập (đo từ dấu thời gian commit đầu tiên trong kiểm soát phiên bản đến dấu
thời gian triển khai production trong đường ống, không tính các nhánh hotfix). Hai đội
có cùng định nghĩa nhưng khác phương pháp thu thập vẫn tạo ra những con số không so
sánh được. Hãy ghi cả hai vào hiến chương chỉ số từ chủ đề 1.4, và coi một thay đổi ở
một trong hai là một thay đổi cần cùng một đợt rà soát được ghi lại.

## Đánh đổi: ưu và nhược điểm

| Loại nguồn | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Đo đạc đường ống tự động (CI/CD, kiểm soát phiên bản) | Khách quan, có dấu thời gian, khó làm giả, ít công sức liên tục | Cần đầu tư kỹ thuật ban đầu để xây và duy trì |
| Dữ liệu công cụ theo dõi vấn đề và quản lý dự án | Sẵn có rộng rãi, quen thuộc với các đội | Phụ thuộc vào sự cẩn trọng của con người; thường không nhất quán giữa các đội |
| Khảo sát và tự báo cáo | Nguồn duy nhất cho trải nghiệm chủ quan (hài lòng, phúc lợi) | Thiên kiến hồi tưởng, thiên kiến mong muốn xã hội, mệt mỏi vì trả lời |
| Nền tảng quan sát và viễn trắc | Tín hiệu cấp hệ thống phong phú, thời gian thực | Chỉ bao quát những gì được đo đạc tường minh; có thể đắt ở quy mô lớn |

Mâu thuẫn trung tâm là **tính khách quan so với độ bao phủ**. Đo đạc tự động là nguồn
đáng tin nhất nhưng hoàn toàn không quan sát được trải nghiệm chủ quan, trong khi khảo
sát có thể chạm đúng điều tự động hóa không chạm tới nhưng mang rủi ro thiên kiến thật.
Hãy giải quyết bằng cách dùng đo đạc tự động ở bất cứ nơi nào có thể quan sát trực tiếp
một sự kiện, và dành tự báo cáo riêng và chỉ cho những gì thực sự cần hỏi một con người,
đừng bao giờ như một sự thay thế lười biếng cho dữ liệu mà một hệ thống lẽ ra có thể
cung cấp.

## Câu hỏi để thảo luận với đội của bạn

1. **Với năm chỉ số quan trọng nhất của chúng ta, chúng ta có gọi được tên chính xác
   hệ thống nguồn và phương pháp thu thập của từng cái không, hay đang giả định một
   định nghĩa mà không biết dữ liệu thực sự đến từ đâu?** Đây là một khoảng trống phổ
   biến đến bất ngờ: một chỉ số được áp dụng từ một khung hay bảng điều khiển mặc định
   của nhà cung cấp, và không ai trong đội hiện tại thực sự biết hệ thống nào tạo ra dữ
   liệu nền tảng hay bằng cách nào. Hãy lần từng cái về nguồn gốc như một bài tập nhóm.

2. **Chỉ số nào của chúng ta dựa vào tự báo cáo cho một thứ mà hệ thống có thể quan sát
   trực tiếp, và cần gì để thay tự báo cáo đó bằng đo đạc thật?** Số lần triển khai tự
   báo cáo, số giờ làm tự báo cáo và thời gian chu kỳ tự ước lượng đều là những ví dụ
   phổ biến của việc dùng sai nguồn dữ liệu cho thứ tự động hóa có thể nắm bắt đáng tin
   hơn. Hãy xác định chúng và ưu tiên thay thế những cái có mức đặt cược cao nhất.

3. **Làm sao chúng ta biết nếu một trong các đường ống dữ liệu của mình hỏng thầm lặng?**
   Phần lớn tổ chức chỉ phát hiện một đường ống chỉ số hỏng khi ai đó nhận thấy một con
   số trông không hợp lý, điều có thể mất nhiều tháng. Hãy bàn xem hôm nay có đường ống
   nào của bạn có kiểm tra sức khỏe tự động không, và nếu không, cái nào cần trước nhất.

4. **Ở đâu một phép chuyển dịch giữa các hệ thống đã làm đổi nghĩa của một chỉ số mà
   không ai quyết định điều đó một cách có chủ đích?** Một trường có nghĩa này trong
   hệ thống nguồn có thể mang nghĩa hơi khác sau một lần tích hợp hay di chuyển, và con
   số kết quả có thể trông hợp lý trong khi sai. Hãy đi qua toàn bộ đường đi dữ liệu của
   chỉ số quan trọng nhất của bạn và tìm các điểm chuyển dịch.

5. **Chúng ta có ghi lại phương pháp thu thập, không chỉ định nghĩa, trong hiến chương
   chỉ số không?** Hai đội có thể chia sẻ tên và định nghĩa của một chỉ số trong khi tính
   nó từ những phương pháp thu thập khác nhau, tạo ra những con số thực ra không so sánh
   được. Hãy kiểm toán một mẫu các hiến chương của bạn so với đúng khoảng trống này.

6. **Làm sao chúng ta phân biệt một xu hướng thật với một hiện tượng nhân tạo của chất
   lượng dữ liệu khi một con số dịch chuyển bất ngờ?** Một dịch chuyển đột ngột của một
   chỉ số thường là dấu hiệu đầu tiên của hoặc một thay đổi thật hoặc một đường ống hỏng,
   và phân biệt hai điều đó đòi hỏi biết nguồn dữ liệu đủ rõ để điều tra nhanh. Hãy bàn
   quy trình thực tế của đội bạn cho lần dịch chuyển chỉ số không giải thích được gần
   nhất bạn gặp.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Với một ngăn xếp nhỏ, phần lớn chỉ số của bạn có thể đến thẳng từ nhà
cung cấp CI/CD, máy chủ kiểm soát phiên bản và một công cụ khảo sát nhẹ, không cần xây
đường ống tùy chỉnh. Rủi ro là bỏ qua ngay cả các kiểm tra sức khỏe cơ bản vì đội đang
chạy nhanh; một kiểm tra tự động năm phút rằng một nguồn dữ liệu vẫn đang gửi sự kiện
là bảo hiểm rẻ chống lại việc bay mù thầm lặng.

**Doanh nghiệp nhỏ.** Hãy dựa vào báo cáo tích hợp của các công cụ sẵn có thay vì xây
đường ống dữ liệu tùy chỉnh mà bạn không đủ năng lực duy trì. Hãy rõ ràng về con số
nào đến từ hệ thống tự động và con số nào là ước lượng ai đó gõ vào bảng tính, vì hai
loại mang độ tin cậy rất khác nhau, dù chúng cùng nằm trên một trang.

**Doanh nghiệp lớn.** Các vấn đề chất lượng dữ liệu cộng dồn qua tích hợp, di chuyển và
ranh giới đơn vị kinh doanh. Hãy đầu tư vào các đường ống dữ liệu tập trung, được giám
sát tốt cho những chỉ số quan trọng nhất, xây các kiểm tra chất lượng dữ liệu tự động
như một thực hành chuẩn, và kiểm toán phương pháp thu thập, không chỉ định nghĩa, bất
cứ khi nào so sánh chỉ số giữa các đơn vị kinh doanh.

**Chính phủ.** Nguồn gốc dữ liệu có thể mang trọng lượng pháp lý và kiểm toán: một con
số hiệu suất công bố có thể phải vượt qua một cuộc kiểm toán bên ngoài không chỉ về giá
trị của nó mà về toàn bộ chuỗi thu thập. Hãy ghi lại dòng dõi dữ liệu một cách tường
minh, lưu giữ hồ sơ phương pháp thu thập lịch sử ngay cả sau khi phương pháp luận thay
đổi, và sẵn sàng chứng minh chính xác một con số được tạo ra thế nào, không chỉ nó hiện
đọc ra bao nhiêu.

## Ví dụ

**Doanh nghiệp lớn.** Ban lãnh đạo kỹ thuật của một công ty dịch vụ tài chính đã theo
dõi "thời gian dẫn của thay đổi" hai năm trước khi phát hiện rằng một lần di chuyển
đường ống dữ liệu mười tám tháng trước đã lặng lẽ chuyển nguồn dấu thời gian từ commit
đầu tiên sang lúc tạo pull request, rút ngắn thời gian dẫn biểu kiến trung bình vài giờ
ở mọi đội mà không ai nhận ra hay phê duyệt thay đổi. Cách sửa đưa vào một kiểm tra chất
lượng dữ liệu so sánh phân phối của từng chỉ số tuần này với tuần trước và gắn cờ các
dịch chuyển bất thường về mặt thống kê để người xem xét, bắt được thêm hai vấn đề đường
ống thầm lặng khác trong năm sau đó.

**Chính phủ.** Bảng điều khiển độ tin cậy dịch vụ hướng công chúng của một cơ quan giao
thông dựa vào hỗn hợp dữ liệu viễn trắc cảm biến tự động và các báo cáo sự cố nhập tay
từ các văn phòng khu vực. Một cuộc kiểm toán thấy rằng các khu vực có ít năng lực nhân
sự hơn có hệ thống báo cáo thiếu các sự cố nhỏ, không phải vì thiếu trung thực mà đơn
giản vì việc nhập tay tranh thời gian với công việc khẩn hơn, nghĩa là con số độ tin cậy
công bố tốt hơn thực tế ở đúng những khu vực ít có thể để việc bảo trì thiếu nguồn lực bị
bỏ qua. Cách sửa của cơ quan thay việc nhập sự cố thủ công bằng ghi nhật ký tự động kích
hoạt bởi cảm biến ở bất cứ nơi nào khả thi và thêm một ước lượng được ghi lại về độ bao
phủ của báo cáo thủ công bên cạnh con số công bố.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc đo đạc vững chắc là sự tự tin: một ban lãnh đạo tin dữ liệu của mình có
thể hành động quyết đoán theo nó, trong khi một đội từng bị bỏng vì một đường ống hỏng
thầm lặng bắt đầu nghi ngờ mọi con số, làm chậm mọi quyết định phụ thuộc vào chỉ số.
Sự mất tự tin đó tốn kém và khó sửa, thường mất nhiều thời gian hơn hẳn để xây lại so với
chi phí của khoản đầu tư đo đạc ban đầu.

Tổng chi phí sở hữu của việc đo đạc tốt gồm công việc kỹ thuật ban đầu để xây các đường
ống đáng tin và chi phí liên tục của giám sát chất lượng dữ liệu, cả hai đều dễ bị đầu tư
thiếu vì không cái nào tạo ra một ô bảng điều khiển nhìn thấy được của riêng nó. Việc đầu
tư thiếu đó là một sự tiết kiệm giả: chi phí phát hiện một đường ống hỏng thầm lặng sau
nhiều tháng quyết định được đưa ra trên dữ liệu xấu cao hơn nhiều so với chi phí xây các
kiểm tra sức khỏe lẽ ra đã bắt được nó từ ngày đầu.

## Phản mẫu và cạm bẫy

- **Tin một con số mà không biết hệ thống nguồn của nó:** một chỉ số được áp dụng từ một
  khung hay mặc định của nhà cung cấp mà không ai lần xem dữ liệu thực sự đến từ đâu.
- **Tự báo cáo thứ mà hệ thống có thể quan sát trực tiếp:** đưa nhiễu và thiên kiến không
  cần thiết vào dữ liệu lẽ ra có thể khách quan.
- **Không có kiểm tra chất lượng dữ liệu tự động trên một đường ống chỉ số:** một đường
  ống hỏng thầm lặng có thể hiển thị con số sai suốt nhiều tháng mà không bị phát hiện.
- **Chỉ ghi định nghĩa, không ghi phương pháp thu thập:** hai đội cùng tên chỉ số vẫn có
  thể đang tính những con số không so sánh được.
- **Một bảng điều khiển hiển thị "0" hoặc dữ liệu cũ như thể hiện tại, không dấu hiệu
  nào về lỗi nguồn:** tệ hơn một thông báo "không có dữ liệu" nhìn thấy được.
- **Các khu vực hoặc đội thiếu nguồn lực có hệ thống báo cáo thiếu do gánh nặng nhập
  tay:** một khoảng trống chất lượng dữ liệu tương quan với đúng những khu vực cần chú ý
  nhất.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Không ai lần ngược được một cách đáng tin một chỉ số về hệ thống
  nguồn của nó; các đường ống không có kiểm tra sức khỏe và lỗi không bị phát hiện.
- **Mức 2, Phát triển:** Một số chỉ số có nguồn được ghi lại, nhưng phương pháp thu thập
  không nhất quán và các kiểm tra chất lượng dữ liệu chỉ tùy hứng.
- **Mức 3, Chuẩn hóa:** Mỗi chỉ số được quản trị ghi lại hệ thống nguồn và phương pháp
  thu thập; đường ống tự động được ưu tiên hơn tự báo cáo ở bất cứ nơi nào có thể quan
  sát trực tiếp một sự kiện.
- **Mức 4, Quản lý:** Các kiểm tra chất lượng dữ liệu tự động giám sát mọi đường ống
  quan trọng, gắn cờ bất thường để xem xét, và dòng dõi dữ liệu được ghi lại và kiểm
  toán được.
- **Mức 5, Điều phối:** Tổ chức coi chất lượng dữ liệu là một kỷ luật kỹ thuật hạng nhất
  với giám sát và ứng phó sự cố riêng, và có thể chứng minh nguồn gốc đầy đủ của bất kỳ
  chỉ số công bố nào theo yêu cầu.

## Ý tưởng để thảo luận

1. Chúng ta có lần ngược được ba chỉ số hàng đầu về đúng hệ thống nguồn của chúng ngay bây giờ, trực tiếp, trong buổi họp này không?
2. Chỉ số hiện tại nào của chúng ta dựa vào tự báo cáo cho thứ mà một hệ thống có thể đo trực tiếp?
3. Đường ống chỉ số nào của chúng ta hiện có kiểm tra sức khỏe tự động?
4. Lần cuối chúng ta phát hiện một đường ống dữ liệu hỏng thầm lặng là khi nào, và nó đã sai bao lâu?
5. Ở đâu việc nhập dữ liệu thủ công tạo ra khoảng cách giữa thực tế được báo cáo và thực tế thật?

## Điểm chính cần nhớ

- Ưu tiên **đo đạc tự động** hơn tự báo cáo ở bất cứ nơi nào hệ thống có thể quan sát
  trực tiếp sự kiện; dành tự báo cáo cho trải nghiệm thực sự chủ quan.
- Mỗi chỉ số cần một **hệ thống nguồn và phương pháp thu thập** được ghi lại, không chỉ
  một định nghĩa.
- Chất lượng dữ liệu **suy giảm thầm lặng**; hãy xây các kiểm tra tự động vào chính
  đường ống thay vì phát hiện hỏng hóc một cách tình cờ.
- Đo đạc **tại sự kiện**, không phải sau một phép chuyển dịch, để giảm thiểu sự trôi
  giữa điều đã xảy ra và điều bảng điều khiển hiển thị.
- Chi phí của một đường ống hỏng thầm lặng, nhiều tháng quyết định dựa trên dữ liệu xấu,
  vượt xa chi phí của các kiểm tra sức khỏe lẽ ra đã bắt được nó.

## Tài liệu tham khảo và đọc thêm

- *Observability Engineering*, của Charity Majors, Liz Fong-Jones và George Miranda
  (các nguyên tắc thiết kế đo đạc và viễn trắc).
- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez
  Humble và Gene Kim (cách tiếp cận đo đạc đằng sau các chỉ số DORA).
- *Data Quality: The Accuracy Dimension*, của Jack E. Olson (các khái niệm chất lượng
  dữ liệu áp dụng cho đường ống chỉ số).
- *How to Measure Anything*, của Douglas W. Hubbard (các phương pháp đo lường cho những
  đại lượng có vẻ khó quan sát trực tiếp).
