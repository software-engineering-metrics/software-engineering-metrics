# 2.9 Chỉ số pull request và đánh giá mã

## Tổng quan và động lực

[Đánh giá mã](https://en.wikipedia.org/wiki/Code_review) thường là yếu tố đóng góp thời gian chờ lớn nhất
trong phần phân rã thời gian chu kỳ từ chủ đề 2.6, và cũng là giai đoạn nằm trực tiếp nhất dưới tầm
kiểm soát của chính một đội để cải thiện, không như một nút thắt nền tảng dùng chung hay một phụ thuộc
bên ngoài. Chủ đề này bao quát các chỉ số cụ thể nằm bên trong giai đoạn đánh giá: thời gian đến lần
đánh giá đầu tiên, kích thước pull request, số vòng lặp đánh giá, và phân phối tải của người đánh giá,
và cách dùng chúng để cải thiện tốc độ đánh giá mà không hy sinh lợi ích chất lượng thật sự mà đánh giá
được kỳ vọng mang lại.

Rủi ro mà chủ đề này cảnh giác nhất là điều mà cuốn sách này chưa bao quát trực tiếp: tối ưu tốc độ đánh
giá có thể lặng lẽ làm xói mòn chất lượng đánh giá nếu theo đuổi cẩu thả. Một đội giảm một nửa thời
gian đến lần đánh giá đầu tiên bằng cách đóng dấu duyệt mọi thứ đã cải thiện một chỉ số trong khi phá
hủy giá trị thật của thực hành đó. Mọi khuyến nghị trong chủ đề này được viết với sự đánh đổi đó trong
tầm mắt, vì các chỉ số pull request nằm trong số những chỉ số dễ bị lách nhất trong cuốn sách này theo
kiểu trông đẹp trên bảng điều khiển trong khi làm cơ sở mã tệ đi một cách đo được.

Với các đội lớn, chỉ số đánh giá làm lộ các vấn đề cân bằng tải vốn vô hình: một số ít kỹ sư cao cấp
hấp thụ một phần tải đánh giá không cân xứng, một đội hay một khu vực cơ sở mã cụ thể nơi các đánh giá
liên tục đình trệ, hay một kiểu mẫu pull request quá cỡ khiến đánh giá kỹ về thực tế là không thể bất kể
người đánh giá cần mẫn đến đâu. Những kiểu mẫu này cộng dồn ở quy mô lớn nhiều hơn hẳn so với ở một đội
nhỏ, nơi mọi người trực tiếp thấy sự mất cân bằng mà không cần một chỉ số để làm lộ nó.

## Các nguyên tắc chính

- **Thời gian đến lần đánh giá đầu tiên thường là đòn bẩy lớn nhất, không phải bản thân độ kỹ lưỡng của
  đánh giá.** Phần lớn độ trễ đến từ việc một pull request chờ được nhìn tới, không phải từ cuộc trao
  đổi đánh giá kéo dài khi nó đã bắt đầu.
- **Pull request nhỏ hơn được đánh giá nhanh hơn và kỹ hơn, không chỉ nhanh hơn.** Kích thước là điểm
  đòn bẩy cho cả tốc độ lẫn chất lượng đồng thời.
- **Tốc độ đánh giá và chất lượng đánh giá không tự động đối nghịch, nhưng chúng có thể bị đánh đổi một
  cách cẩu thả.** Hãy phòng ngừa sự đánh đổi đó một cách tường minh.
- **Mất cân bằng tải của người đánh giá là phổ biến và thường vô hình nếu không có chỉ số.** Một số ít
  người thường hấp thụ một phần không cân xứng.
- **Các chỉ số này chịu rủi ro lách kiểu đóng dấu duyệt.** Một sự phê duyệt nhanh mà không có sự xem xét
  thật đánh bại toàn bộ mục đích của đánh giá.

## Khuyến nghị

### Theo dõi thời gian đến lần đánh giá đầu tiên làm chỉ số tốc độ chính

Hãy đo khoảng thời gian từ lúc một pull request được mở đến lúc có bình luận hay phê duyệt có nội dung
đầu tiên của người đánh giá, được đo đạc tự động từ nền tảng kiểm soát phiên bản của bạn. Đây thường
là yếu tố đóng góp thời gian chờ chi phối trong giai đoạn đánh giá (chủ đề 2.5, chủ đề 2.6), và cải
thiện nó, qua các chuẩn mực phân công đánh giá rõ ràng hơn, thực hành thông báo, hoặc các khối thời
gian đánh giá chuyên dụng, thường tạo ra cải thiện đơn lẻ lớn nhất cho tổng thời gian chu kỳ mà một đội
có thể có.

### Theo dõi kích thước pull request và chủ động khuyến khích các thay đổi nhỏ hơn

Hãy đo số dòng thay đổi hoặc số tệp bị đụng tới trên mỗi pull request, và coi một kích thước trung vị
lớn dai dẳng là tín hiệu đáng xử lý trực tiếp. Pull request nhỏ hơn được đánh giá nhanh hơn, kỹ hơn
(người đánh giá thực sự giữ được cả thay đổi trong đầu), và dễ hoàn tác hơn nếu có gì sai, nối trực
tiếp trở lại nguyên tắc cỡ lô đằng sau tần suất triển khai ở chủ đề 2.10. Hãy khuyến khích tách các
thay đổi lớn thành một chuỗi pull request nhỏ hơn, có thể đánh giá độc lập, bất cứ nơi nào công việc
cho phép.

### Giám sát tường minh phân phối tải của người đánh giá

Hãy theo dõi số lượt đánh giá hoàn thành của mỗi người trong một cửa sổ cuộn, và chú ý cụ thể đến việc
một số ít người hấp thụ một phần không cân xứng. Kiểu mẫu này phổ biến, thường rơi vào các kỹ sư cao
cấp nhất hoặc được tin cậy nhất, và tạo ra cả nút thắt (sự có mặt của họ giới hạn thông lượng đánh giá
của cả đội) lẫn rủi ro kiệt sức (chủ đề 3.2 bao quát chỉ số phúc lợi sâu hơn). Hãy luân phiên trách
nhiệm đánh giá có chủ đích thay vì để nó tập trung theo mặc định quanh người phản hồi nhanh nhất.

### Chủ động phòng ngừa rủi ro lách kiểu đóng dấu duyệt

Hãy ghép thời gian đến lần đánh giá đầu tiên với một tín hiệu chất lượng: tỷ lệ lỗi hoặc sự cố truy
ngược về các thay đổi đã được duyệt với không bình luận đánh giá nào, hoặc tỷ lệ bản sửa sau gộp cần
cho mã vừa được đánh giá. Một đội cải thiện tốc độ đánh giá bằng cách duyệt mà không xem xét thật sẽ
thấy rào chắn này suy giảm, chính là nguyên tắc ghép đôi từ chủ đề 1.2 áp dụng cho họ chỉ số cụ thể này.
Đừng bao giờ theo đuổi tốc độ đánh giá mà không có chỉ số đối trọng này trong tầm mắt.

### Dùng số vòng lặp đánh giá để phát hiện ma sát, không để phán xét cá nhân

Số vòng đánh giá mà một pull request trải qua trước khi gộp có thể báo hiệu ma sát thật, yêu cầu chưa rõ,
bất đồng về cách tiếp cận, kỳ vọng phong cách không nhất quán, đáng điều tra ở cấp quy trình. Hãy tránh
dùng con số này để phán xét trực tiếp từng tác giả hay người đánh giá; một số vòng lặp cao thường là tín
hiệu về hệ thống hoặc giao tiếp hơn là về cá nhân, và coi nó như một bảng điểm cá nhân mạo hiểm với đúng
sự trôi sang đánh giá mà chủ đề 1.1 cảnh báo.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Tối ưu thuần túy cho thời gian đến lần đánh giá đầu tiên | Tín hiệu nhanh, rõ, dễ đo đạc | Có thể khuyến khích đánh giá hời hợt, đóng dấu duyệt nếu không có rào chắn |
| Tối ưu thuần túy cho việc giảm kích thước pull request | Cải thiện đồng thời cả tốc độ lẫn độ kỹ lưỡng | Không phải công việc nào cũng tách gọn thành các gia số nhỏ |
| Luân phiên tải đánh giá đều | Giảm nút thắt và rủi ro kiệt sức | Có thể làm chậm đánh giá cho mã chuyên biệt, khó đánh giá cần chuyên môn cụ thể |
| Tập trung đánh giá ở các kỹ sư cao cấp | Chuyên môn miền sâu được áp dụng nhất quán | Tạo nút thắt và rủi ro kiệt sức theo thời gian |

Mâu thuẫn trung tâm là **tốc độ so với độ sâu của sự xem xét**. Mọi kỹ thuật trong chủ đề này để tăng tốc
đánh giá, phản hồi đầu tiên nhanh hơn, pull request nhỏ hơn, tải người đánh giá phân bổ rộng hơn, đều
mang một rủi ro đánh đổi mất sự xem xét thật nếu theo đuổi mà không có rào chắn chất lượng mà chủ đề
này khuyến nghị. Hãy giải quyết bằng cách ghép mọi chỉ số tốc độ với một tín hiệu chất lượng, theo dõi
trong cùng giai đoạn, để một đội phân biệt được cải thiện quy trình thật với một chuẩn đánh giá đang
lặng lẽ xói mòn.

## Câu hỏi để thảo luận với đội của bạn

1. **Thời gian đến lần đánh giá đầu tiên thực tế của chúng ta là bao nhiêu, và giai đoạn đánh giá tiêu
   thụ bao nhiêu phần tổng thời gian chu kỳ?** Hãy lấy con số thật thay vì dựa vào ấn tượng; thời gian
   chờ đánh giá thường lớn hơn các đội tưởng, chính vì dễ đánh giá thấp thời gian chờ đợi so với thời
   gian làm việc tích cực.

2. **Kích thước pull request trung vị của chúng ta là bao nhiêu, và bao nhiêu độ trễ đánh giá sẽ co lại
   nếu kích thước đó giảm?** Pull request lớn vừa chậm đánh giá hơn vừa dễ nhận đánh giá hời hợt hơn đơn
   giản vì người đánh giá không thể giữ cả thứ trong đầu cùng lúc. Hãy nhìn phân phối kích thước thực tế
   của bạn, không chỉ trung vị.

3. **Tải đánh giá có tập trung vào một số ít người không, và thông lượng đánh giá của chúng ta sẽ ra sao
   nếu một trong số họ vắng mặt hai tuần?** Câu hỏi này làm lộ đồng thời rủi ro nút thắt và rủi ro kiệt
   sức. Hãy lấy dữ liệu tải người đánh giá thật thay vì dựa vào ấn tượng.

4. **Chúng ta đã bao giờ cải thiện một chỉ số tốc độ đánh giá theo cách mà, khi nghĩ lại, làm giảm sự
   xem xét thật chưa?** Hãy trung thực ở đây; đây chính là rủi ro đóng dấu duyệt mà chủ đề này gọi tên,
   và dễ trượt vào mà không có quyết định có chủ đích nào.

5. **Một số vòng lặp đánh giá cao thường báo hiệu điều gì ở đội chúng ta: bất đồng thật, yêu cầu chưa rõ,
   hay kỳ vọng phong cách không nhất quán?** Hãy xem một mẫu các pull request có số vòng lặp cao bất
   thường và chẩn đoán kiểu mẫu thực, thay vì cho rằng nó phản ánh xấu về tác giả hay người đánh giá.

6. **Chúng ta có rào chắn chất lượng ghép với các chỉ số tốc độ đánh giá không, hay đang theo dõi tốc độ
   một cách đơn độc?** Nếu câu trả lời trung thực là không có rào chắn nào, đó là khoảng trống đáng lấp
   trước khi đẩy tốc độ đánh giá xa hơn, theo nguyên tắc ghép đôi của chủ đề 1.2.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Đánh giá thường nhanh theo mặc định ở một đội nhỏ, đôi khi gần như quá nhanh, đánh giá
một người duyệt với sự xem xét tối thiểu vì ai cũng tin ai. Rủi ro cần để ý khi đội lớn lên là chất lượng
đánh giá không mở rộng theo quy mô đội, vì sự tin cậy không chính thức vốn hiệu quả với năm kỹ sư không
tự động hiệu quả với năm mươi.

**Doanh nghiệp nhỏ.** Phần lớn các nền tảng kiểm soát phiên bản báo cáo sẵn thống kê thời gian đến lúc
gộp và số lượt đánh giá; hãy dùng chúng thay vì xây đo đạc tùy chỉnh. Kỷ luật chính đáng áp dụng đơn giản
là để ý xem tải đánh giá có lặng lẽ tập trung vào một hay hai người khi đội lớn lên không.

**Doanh nghiệp lớn.** Mất cân bằng tải người đánh giá và nút thắt tri thức chuyên biệt đặc biệt phổ biến ở
đây, nơi chuyên môn miền sâu trong một hệ thống quan trọng có thể tập trung trách nhiệm đánh giá vào một
nhóm nhỏ bất kể quy mô đội. Hãy đầu tư vào chia sẻ tri thức và luân phiên đánh giá có chủ đích để lan tỏa
chuyên môn, giảm cả nút thắt lẫn rủi ro hệ số xe buýt của chuyên môn đó nằm ở quá ít người.

**Chính phủ.** Quy trình đánh giá ở đây thường mang trọng lượng tuân thủ bên cạnh các mục tiêu chất lượng,
điều có thể khiến pull request lớn hơn và đánh giá chậm hơn theo thiết kế. Nơi các yêu cầu tuân thủ thực
sự đòi hỏi đánh giá kỹ, hãy tập trung nỗ lực cải thiện vào việc giảm thời gian chờ (phân công đánh giá
nhanh hơn, phân loại rõ hơn) thay vì thỏa hiệp độ sâu thực của đánh giá, và ghi lại sự đánh đổi tường
minh nếu sự xem xét phải giữ nặng vì lý do quy định.

## Ví dụ

**Doanh nghiệp lớn.** Tổ chức kỹ thuật của một công ty an ninh mạng thấy rằng một nhúm kỹ sư principal đang
hoàn thành hơn 40% mọi lượt đánh giá mã trong một tổ chức hai trăm người, một sự mất cân bằng chưa ai đo
trực tiếp cho đến khi dữ liệu tải người đánh giá được lấy ra. Sự tập trung này vừa là một nút thắt, vì sự
có mặt của các kỹ sư đó giới hạn thông lượng đánh giá cho cả tổ chức, vừa là rủi ro kiệt sức được một khảo
sát mức độ gắn kết đánh dấu riêng (chủ đề 3.2). Tổ chức đưa vào một chương trình luân phiên đánh giá có cấu
trúc kèm các buổi chia sẻ tri thức có mục tiêu, và trong hai quý tải đánh giá đã lan ra một nhóm rộng hơn
nhiều, với thời gian đến lần đánh giá đầu tiên cải thiện như một tác dụng phụ trực tiếp của việc giảm nút
thắt.

**Chính phủ.** Đội kỹ thuật của một cơ quan thuế, chịu áp lực cải thiện tốc độ phân phối, đặt mục tiêu giảm
một nửa thời gian đến lần đánh giá đầu tiên. Trong một quý, mục tiêu đạt được, nhưng một cuộc kiểm toán
chất lượng sau đó thấy sự tăng vọt các pull request sửa lỗi sau gộp, tập trung ở những thay đổi được duyệt
với một bình luận ngắn duy nhất. Cách sửa của đội ghép mục tiêu tốc độ với một rào chắn chất lượng tường
minh, tỷ lệ bản sửa sau gộp cần trong hai tuần kể từ một lần đánh giá, và đào tạo lại đội về điều một đánh
giá có nội dung thực sự đòi hỏi, khôi phục sự xem xét thật trong khi giữ phần lớn cải thiện tốc độ đến từ việc
phân công đánh giá tốt hơn và kích thước pull request nhỏ hơn.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của các chỉ số đánh giá được quản lý tốt là phân phối nhanh hơn mà không hy sinh chất lượng, một
sự kết hợp hiếm: phần lớn cải thiện phân phối đánh đổi tốc độ với rủi ro ở đâu đó, nhưng cải thiện ở giai
đoạn đánh giá, pull request nhỏ hơn, phân phối tải tốt hơn, phản hồi đầu tiên nhanh hơn, thực sự cải thiện
cả hai đồng thời khi được theo đuổi cùng rào chắn chất lượng mà chủ đề này khuyến nghị. Ví dụ an ninh mạng ở
trên là điển hình: sửa một nút thắt đã cải thiện tốc độ trong khi chất lượng đánh giá nền tảng, nếu có gì,
còn cải thiện khi chuyên môn lan rộng hơn.

Tổng chi phí sở hữu thấp: phần lớn các chỉ số này đến trực tiếp từ dữ liệu nền tảng kiểm soát phiên bản sẵn
có với đo đạc thêm tối thiểu, và các thay đổi quy trình mà chúng chỉ ra, luân phiên đánh giá, khuyến khích
pull request nhỏ hơn, tốn chủ yếu là kỷ luật hơn là đầu tư công cụ.

## Phản mẫu và cạm bẫy

- **Tối ưu thời gian đến lần đánh giá đầu tiên mà không có rào chắn chất lượng ghép đôi:** mời gọi việc duyệt
  đóng dấu đánh bại mục đích của đánh giá.
- **Bỏ qua sự tập trung tải người đánh giá:** tạo ra cả nút thắt lẫn rủi ro kiệt sức vẫn vô hình cho đến khi
  được đo.
- **Coi số vòng lặp đánh giá như một bảng điểm cá nhân:** thường là tín hiệu về hệ thống hay giao tiếp hơn là
  cá nhân.
- **Chấp nhận pull request lớn dai dẳng là không thể tránh:** phần lớn các thay đổi lớn có thể được tách xa
  hơn các đội ban đầu tưởng.
- **Áp dụng độ sâu đánh giá đồng đều bất kể rủi ro của thay đổi:** lãng phí sự xem xét vào các thay đổi rủi ro
  thấp trong khi có thể xem xét thiếu các thay đổi rủi ro cao.
- **Đo tốc độ đánh giá nhưng không bao giờ kiểm tra xem sự xem xét thật có giảm theo không:** cách phổ biến nhất
  mà họ chỉ số này bị lách một cách vô tình.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Các chỉ số đánh giá không được theo dõi; phân phối tải đánh giá và kích thước pull
  request vô hình.
- **Mức 2, Phát triển:** Một số dữ liệu tốc độ đánh giá tồn tại từ mặc định của nền tảng, nhưng không có rào
  chắn chất lượng và không có quản lý chủ động tải người đánh giá.
- **Mức 3, Chuẩn hóa:** Thời gian đến lần đánh giá đầu tiên, kích thước pull request và tải người đánh giá được
  theo dõi nhất quán, với một rào chắn chất lượng tường minh ghép với các cải thiện tốc độ.
- **Mức 4, Quản lý:** Tải người đánh giá được cân bằng lại chủ động qua luân phiên và chia sẻ tri thức; các kiểu
  mẫu số vòng lặp được điều tra ở cấp quy trình thay vì cấp cá nhân.
- **Mức 5, Điều phối:** Các chỉ số giai đoạn đánh giá trực tiếp thông tin cho đầu tư quy trình, và tổ chức có thể
  chứng minh cải thiện đồng thời cả tốc độ đánh giá lẫn các kết quả chất lượng liên quan đến đánh giá trong một
  giai đoạn kéo dài.

## Ý tưởng để thảo luận

1. Thời gian đến lần đánh giá đầu tiên trung vị hiện tại của chúng ta là bao nhiêu, và thời gian đó thực sự đi đâu?
2. Tải đánh giá của chúng ta có tập trung vào một số ít người không, và rủi ro là gì nếu một người vắng mặt?
3. Chúng ta đã bao giờ cải thiện tốc độ đánh giá với cái giá là sự xem xét thật, dù vô tình, chưa?
4. Kích thước pull request trung vị của chúng ta là bao nhiêu, và phần lớn các thay đổi thực tế có thể nhỏ hơn bao nhiêu?
5. Chúng ta coi số vòng lặp đánh giá cao là tín hiệu hệ thống hay phán xét cá nhân?

## Điểm chính cần nhớ

- **Thời gian đến lần đánh giá đầu tiên** thường là đòn bẩy đơn lẻ lớn nhất bên trong giai đoạn đánh giá, hơn cả độ
  dài của chính cuộc trao đổi đánh giá.
- **Pull request nhỏ hơn** cải thiện đồng thời cả tốc độ đánh giá lẫn độ kỹ lưỡng của đánh giá.
- **Mất cân bằng tải người đánh giá** là phổ biến và thường vô hình nếu không đo trực tiếp; nó tạo ra cả nút thắt
  lẫn rủi ro kiệt sức.
- Hãy ghép mọi chỉ số tốc độ đánh giá với một **rào chắn chất lượng** tường minh để bắt rủi ro lách kiểu đóng dấu
  duyệt mà họ chỉ số này đặc biệt dễ mắc.
- Dùng **số vòng lặp đánh giá** để chẩn đoán ma sát cấp hệ thống, không để phán xét từng tác giả hay người đánh giá.

## Tài liệu tham khảo và đọc thêm

- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble và Gene Kim (các thực
  hành đánh giá mã và mối quan hệ của chúng với hiệu suất phân phối).
- Nghiên cứu *Modern Code Review* của Alberto Bacchelli và Christian Bird (nghiên cứu thực nghiệm về các thực hành
  đánh giá mã ở quy mô lớn).
- *Peer Reviews in Software: A Practical Guide*, của Karl E. Wiegers (thiết kế quy trình đánh giá và các sự đánh đổi
  của nó).
- *The Principles of Product Development Flow*, của Donald G. Reinertsen (lập luận cỡ lô áp dụng cho việc định cỡ
  pull request).
