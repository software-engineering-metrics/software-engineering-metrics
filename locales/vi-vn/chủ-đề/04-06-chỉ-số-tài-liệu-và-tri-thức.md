# 4.6 Chỉ số tài liệu và tri thức

## Tổng quan và động lực

Chủ đề này khép lại Phần 4 bằng việc đo xem tri thức cần thiết để bảo trì an toàn một cơ sở mã có thực sự được ghi chép và tìm được
hay không, không chỉ là tài liệu có tồn tại đâu đó về mặt kỹ thuật. Chủ đề 3.5 đã bàn về giao tiếp và cộng tác như một mối quan tâm
của trải nghiệm lập trình viên; chủ đề này bàn cùng vấn đề nền tảng đó, tính sẵn có của tri thức, từ phía mã: một kỹ sư mới, hoặc một
kỹ sư hiện có đang làm việc trên mã lạ, có những gì họ cần để thực hiện một thay đổi an toàn không, hay tri thức đó chỉ nằm trong đầu
một số ít dần đi những người thâm niên.

Thách thức đo lường ở đây thực sự khó, khó hơn hầu hết các chỉ số khác trong cuốn sách này, vì chất lượng và tính hữu ích của tài liệu
vốn chủ quan hơn một tỷ lệ phần trăm độ bao phủ hay một điểm độ phức tạp. Cách tiếp cận của chủ đề này là đo các đại diện cho tính hữu
ích thay vì sự tồn tại: tài liệu thực sự được truy cập thường xuyên đến đâu, cùng một câu hỏi bị hỏi lặp lại bao nhiêu lần dù câu trả
lời được ghi chép đã tồn tại, và một người chưa quen với hệ thống mất bao lâu để làm việc hiệu quả trong đó. Không đại diện nào hoàn
hảo khi đứng riêng, nhưng cùng nhau chúng cho một bức tranh trung thực hơn nhiều so với việc đếm số trang wiki hay tệp README mà một
cơ sở mã chứa.

Với các đội lớn, mối quan tâm của chủ đề này tích lũy cùng thâm niên và biến động nhân sự của tổ chức theo cách dễ bị đánh giá thấp
cho đến khi một cuộc khủng hoảng buộc phải giải quyết: một hệ thống được cùng hai kỹ sư bảo trì nhiều năm có thể vận hành hoàn toàn
tốt với hầu như không có tài liệu viết, cho đến khi cả hai kỹ sư đó rời đi trong cùng một năm, lúc đó tổ chức phát hiện tri thức chưa
bao giờ thực sự được ghi lại ở đâu bền vững. Các tổ chức doanh nghiệp và chính phủ, với vòng đời hệ thống thường dài hơn và sự liên tục
nhân sự kém chắc chắn hơn một công ty khởi nghiệp, mang rủi ro này nặng hơn hầu hết.

## Các nguyên tắc chính

- **Sự tồn tại của tài liệu không giống với tính hữu ích của tài liệu.** Hãy đo xem nó có thực sự giúp ích không, không chỉ xem nó có
  hiện diện không.
- **Các câu hỏi lặp lại dù đã có câu trả lời được ghi chép cho thấy một vấn đề khả năng tìm thấy, không phải vấn đề công sức viết tài
  liệu.** Nhiều nội dung hơn không phải lúc nào cũng là cách khắc phục.
- **Thời gian làm quen để đóng góp hiệu quả là một đại diện thực tế, mạnh** cho sức khỏe tri thức nói chung, nối trực tiếp với các chỉ
  số cộng tác của chủ đề 3.5.
- **Tri thức chỉ nằm trong đầu người là rủi ro về độ bền,** không phải một trạng thái ổn định, bền vững, dù hiện tại nó vận hành tốt
  đến đâu.
- **Tài liệu mục rữa.** Một trang chính xác một năm trước giờ có thể đang gây hiểu lầm tích cực, và bản thân tình trạng lỗi thời cũng
  cần được theo dõi.

## Khuyến nghị

### Theo dõi việc truy cập và độ lỗi thời của tài liệu, không chỉ sự tồn tại

Khi nền tảng tài liệu của bạn hỗ trợ, hãy theo dõi mức độ thường xuyên các trang thực sự được xem, và riêng biệt, đã bao lâu kể từ lần
cập nhật cuối của một trang so với mức độ thường xuyên hệ thống nền mà nó mô tả thay đổi (đối chiếu dữ liệu mức thay đổi của chủ đề 4.3
hữu ích trực tiếp ở đây). Một trang mô tả một hệ thống đã thay đổi đáng kể kể từ lần sửa cuối của trang là ứng viên mạnh cho việc đang
gây hiểu lầm tích cực hơn là chỉ vô ích, và tín hiệu lỗi thời này đáng được chú ý ít nhất bằng việc theo dõi tài liệu có tồn tại hay
không.

### Để ý các câu hỏi lặp lại như một tín hiệu về khả năng tìm thấy

Nếu cùng một câu hỏi bị hỏi lặp lại trong kênh trò chuyện của đội hay khi làm quen, dù một câu trả lời được ghi chép về mặt kỹ thuật
tồn tại đâu đó, mẫu hình đó cho thấy một vấn đề khả năng tìm thấy, câu trả lời không nằm nơi mọi người tự nhiên tìm nó, hơn là một vấn
đề công sức viết tài liệu mà viết thêm sẽ sửa được. Hãy theo dõi tường minh các câu hỏi lặp lại, và dùng chúng để ưu tiên việc tổ chức
lại hoặc làm nổi bật hơn nội dung hiện có thay vì viết thêm nội dung.

### Đo thời gian làm quen đến đóng góp độc lập, có ý nghĩa đầu tiên

Chỉ số này, được giới thiệu trong chủ đề 3.5 như một tín hiệu cộng tác, cũng là một tín hiệu sức khỏe tài liệu và tri thức từ phía mã.
Một thời gian làm quen ngắn, dễ dự đoán một cách nhất quán gợi ý tri thức thực sự dễ tiếp cận, chính xác; một thời gian dài, biến động
lớn, đặc biệt khi phụ thuộc nhiều vào việc ai tình cờ hướng dẫn một thành viên mới, gợi ý tri thức tập trung một cách nguy hiểm trong
trí nhớ cá nhân thay vì dạng viết bền vững.

### Xác định và ưu tiên tường minh các vùng tri thức quan trọng chưa được ghi chép

Hãy đối chiếu dữ liệu tập trung tri thức của bạn (phân tích [hệ số xe buýt](https://en.wikipedia.org/wiki/Bus_factor) của chủ đề 3.5)
với độ bao phủ tài liệu: một hệ thống có hệ số xe buýt bằng một và không có tài liệu có ý nghĩa là một rủi ro nghiêm trọng, tích lũy
đáng được ưu tiên chú ý hơn một hệ thống được ghi chép tốt có cùng hệ số xe buýt thấp, vì tài liệu ít nhất cung cấp một sự giảm nhẹ
một phần trong khi một người kế nhiệm chuyên trách được đào tạo.

### Coi nợ tài liệu là một hạng mục trong backlog nợ kỹ thuật của bạn

Thay vì theo dõi các khoảng trống tài liệu riêng và không chính thức, hãy gộp các khoảng trống tài liệu đáng kể vào cùng backlog hiển
thị, được định lượng mô tả trong chủ đề 4.5, đặc biệt cho các hệ thống quan trọng, hệ số xe buýt thấp, để công việc tài liệu cạnh tranh
công bằng cho năng lực được ưu tiên thay vì liên tục bị hoãn như một nhiệm vụ địa vị thấp hơn so với việc khắc phục nợ tập trung vào
mã.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Không đo tài liệu | Chi phí quản lý thấp | Rủi ro tri thức vô hình cho đến khi một cuộc khủng hoảng buộc phải phát hiện |
| Đếm sự tồn tại của tài liệu (số trang, có README) | Đơn giản, dễ báo cáo | Không cho biết gì về tính hữu ích, độ chính xác hay khả năng tìm thấy |
| Theo dõi truy cập và độ lỗi thời | Cho thấy tính hữu ích thực và sự mục rữa | Cần phân tích của nền tảng tài liệu và kỷ luật xem xét liên tục |
| Thời gian làm quen như một đại diện | Thực tế, cụ thể, gắn trực tiếp với tác động kinh doanh thật | Gián tiếp; các yếu tố khác ngoài tài liệu cũng ảnh hưởng tốc độ làm quen |

Sự căng thẳng trung tâm là **khả năng đo so với ý nghĩa**. Sự tồn tại của tài liệu dễ đếm một cách tầm thường và hầu như không cho bạn
biết gì hữu ích; tính hữu ích thật, tức ai đó có thực sự tìm và dựa vào được tri thức được ghi chép khi cần hay không, mới là điều thực
sự quan trọng nhưng khó đo trực tiếp hơn. Hãy giải quyết sự căng thẳng bằng cách dùng các đại diện mà chủ đề này khuyến nghị, mẫu hình
truy cập, độ lỗi thời so với mức thay đổi, câu hỏi lặp lại và thời gian làm quen, kết hợp với nhau, chấp nhận rằng không cái nào hoàn hảo
đơn lẻ nhưng sự hội tụ của chúng có ý nghĩa hơn nhiều so với riêng một số đếm sự tồn tại.

## Câu hỏi để thảo luận với đội của bạn

1. **Với hệ thống quan trọng nhất, hệ số xe buýt thấp nhất của chúng ta, tài liệu chính xác, có ý nghĩa có thực sự tồn tại không, hay
   một chuyên gia ra đi sẽ mang theo phần lớn tri thức thật?** Đây là phiên bản sắc bén, cụ thể nhất của mối quan tâm trung tâm của
   chủ đề này; hãy trả lời thành thật trước hết cho hệ thống rủi ro nhất của bạn.

2. **Câu hỏi nào bị hỏi lặp lại trong kênh trò chuyện của đội chúng ta dù một câu trả lời được ghi chép tồn tại đâu đó?** Nếu bạn có thể
   gọi tên ngay một câu, đó là một vấn đề khả năng tìm thấy đáng sửa trực tiếp, nhiều khả năng bằng cách tổ chức lại hoặc làm nổi bật
   hơn nội dung hiện có thay vì viết thêm.

3. **Thành viên mới gần đây nhất của đội mất bao lâu để có đóng góp độc lập, có ý nghĩa đầu tiên, và con số đó so với thành viên trước
   họ thế nào?** Một khác biệt lớn, không giải thích được giữa các cá nhân thường chỉ ra tri thức phụ thuộc nhiều vào người tình cờ
   hướng dẫn hơn là tài liệu bền vững, dễ tiếp cận.

4. **Lần cuối chúng ta kiểm tra một tài liệu có còn chính xác hay không, so với mức hệ thống nền đã thay đổi kể từ khi nó được viết, là
   khi nào?** Nếu câu trả lời thành thật là "chúng ta không kiểm tra điều này một cách có hệ thống", rủi ro lỗi thời đó nhiều khả năng
   lớn hơn mọi người hiện đang giả định.

5. **Backlog nợ kỹ thuật của chúng ta (chủ đề 4.5) có gồm các khoảng trống tài liệu không, hay công việc tài liệu bị liên tục hoãn như
   một nhiệm vụ địa vị thấp hơn so với sửa mã?** Hãy kiểm tra backlog thực tế của bạn và xem nợ tài liệu có hiển thị và cạnh tranh cho
   năng lực được ưu tiên hay thực chất vô hình.

6. **Chúng ta sẽ tốn bao nhiêu nếu một hoặc hai người hiểu hệ thống quan trọng nhất, ít được ghi chép nhất của chúng ta rời đi trong
   cùng một năm?** Câu hỏi cụ thể, khó chịu này đáng được trả lời thành thật thay vì coi rủi ro là trừu tượng hay khó xảy ra.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Chỉ số tài liệu chính thức thường không cần thiết với một đội nhỏ nơi tri thức lan truyền qua trò chuyện trực tiếp,
liên tục. Rủi ro cần để ý là cùng sự tập trung hệ số xe buýt mà chủ đề 3.5 cảnh báo, giờ áp dụng riêng cho tài liệu: khi đội lớn vượt
kích thước mà mọi người trò chuyện hằng ngày, tri thức chưa ghi chép từng hoạt động tốt một cách không chính thức trở thành một gánh
nặng thật.

**Doanh nghiệp nhỏ.** Hãy ưu tiên ghi chép hệ thống quan trọng nhất, ít dự phòng nhất của bạn trước, dù không chính thức, thay vì cố
ghi chép toàn diện mọi thứ. Một tài liệu ngắn, chính xác bao quát điểm hỏng đơn lẻ rủi ro nhất của bạn đem lại nhiều giá trị thật hơn
là độ bao phủ rộng nhưng nông ở khắp nơi.

**Doanh nghiệp lớn.** Cả độ lỗi thời lẫn khả năng tìm thấy của tài liệu đều mở rộng tệ ở đây, vì một tổ chức lớn tích lũy tài liệu
trên nhiều đội và nền tảng nhanh hơn bất kỳ ai có thể giữ cho cập nhật hay tổ chức nhất quán. Hãy đầu tư vào phân tích của nền tảng
tài liệu để theo dõi truy cập và độ lỗi thời ở quy mô lớn, và coi nợ tài liệu là một hạng mục hạng nhất trong backlog nợ trên toàn tổ
chức của bạn.

**Chính phủ.** Thâm niên nhân viên dài thường gặp ở các tổ chức khu vực công có thể che giấu rủi ro tri thức chưa ghi chép nghiêm trọng
sau vẻ ổn định bề ngoài, vì một hệ thống do cùng một người bảo trì mười lăm năm có thể vận hành hoàn toàn tốt cho đến khi người đó nghỉ
hưu. Hãy coi sức khỏe tài liệu tường minh là một mối quan tâm về liên tục hoạt động, nối trực tiếp với kế hoạch nhân lực và kế nhiệm,
không chỉ là một điều tốt đẹp thêm của kỹ thuật.

## Ví dụ

**Doanh nghiệp lớn.** Một công ty dịch vụ tài chính phát hiện, trong một cuộc tái tổ chức không liên quan, rằng động cơ tính toán rủi
ro lõi của mình không có tài liệu có ý nghĩa nào ngoài vài ghi chú mã đã lỗi thời, và hai kỹ sư hiểu nó nhất đều bị điều sang một sáng
kiến mới cùng lúc. Một nỗ lực ghi chép khẩn cấp, tiến hành dưới áp lực thời gian đáng kể, đã trích xuất và ghi lại tri thức quan trọng
trước khi việc điều chuyển có hiệu lực, nhưng quá trình mất nhiều tuần thời gian của kỹ sư cấp cao chuyên trách, thứ có thể được trải
ra dần và rẻ hơn nếu sức khỏe tài liệu đã được theo dõi và ưu tiên chủ động thay vì bị phát hiện như một tình huống khẩn cấp.

**Chính phủ.** Hệ thống quản lý hồ sơ vụ việc hàng chục năm tuổi của một chính quyền tiểu bang đã tích lũy lượng tài liệu đáng kể qua
các năm, nhưng một cuộc kiểm toán khả năng tìm thấy phát hiện các thành viên mới của đội liên tục không tìm được tài liệu hiện có liên
quan và hỏi lặp lại cùng một số ít câu hỏi trong các kênh của đội, những câu hỏi thực ra đã được trả lời đâu đó trong nền tảng tài liệu
rộng lớn, tổ chức kém của cơ quan. Thay vì viết thêm nội dung, cơ quan đầu tư vào việc tổ chức lại và cải thiện cấu trúc tìm kiếm và điều
hướng của tài liệu hiện có, và một khảo sát tiếp theo cho thấy các câu hỏi lặp lại giảm đo được và trải nghiệm làm quen được báo cáo
nhanh hơn đáng kể cho nhân viên mới, mà không thêm một trang nội dung mới nào.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của việc đo và quản lý sức khỏe tài liệu một cách chủ đích là chi phí khủng hoảng được tránh: ví dụ dịch vụ tài chính ở trên
cho thấy sự khác biệt giữa việc ghi lại tri thức chủ động, từ từ và một nỗ lực khẩn cấp, bị nén, tốn kém do việc điều chuyển nhân sự
ngoài kế hoạch. Tri thức quan trọng chưa ghi chép là một khoản nợ thường trực không tốn gì một cách hữu hình cho đến lúc nó đột nhiên
rất đắt trong một lần.

Tổng chi phí sở hữu chủ yếu là kỷ luật theo dõi các đại diện mà chủ đề này khuyến nghị, mẫu hình truy cập, độ lỗi thời, câu hỏi lặp lại,
thời gian làm quen, và sự sẵn lòng gộp các khoảng trống tài liệu vào một backlog được ưu tiên thay vì coi chúng liên tục có địa vị
thấp hơn công việc tập trung vào mã. Kỷ luật đó tốn kém hơn nhiều ít so với việc trích xuất tri thức ở chế độ khủng hoảng mà ví dụ dịch
vụ tài chính cho thấy là phương án thay thế.

## Phản mẫu và cạm bẫy

- **Đếm sự tồn tại của tài liệu thay vì tính hữu ích:** hầu như không cho bạn biết tri thức có thực sự tiếp cận được khi cần hay không.
- **Viết thêm nội dung để đáp lại câu hỏi lặp lại mà không kiểm tra khả năng tìm thấy trước:** thường giải quyết hoàn toàn sai vấn đề.
- **Không bao giờ kiểm tra độ lỗi thời của tài liệu so với mức hệ thống đã thay đổi:** có nguy cơ nội dung lỗi thời gây hiểu lầm tích
  cực.
- **Coi nợ tài liệu liên tục có địa vị thấp hơn nợ mã:** để nó bị hạ ưu tiên kinh niên và vô hình trong backlog.
- **Nhầm vẻ ổn định bề ngoài, một hệ thống nhiều năm không đổi, với rủi ro thấp:** có thể che giấu vấn đề hệ số xe buýt nghiêm trọng,
  chưa ghi chép sau một hệ thống đơn giản là chưa cần đến chuyên gia duy nhất của nó.
- **Chỉ phát hiện tri thức quan trọng chưa ghi chép trong một lần chuyển giao nhân sự khẩn cấp:** kiểu thất bại đắt đỏ, tránh được mà
  chủ đề này được xây ra để ngăn.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Sức khỏe tài liệu không được đo; sự tập trung tri thức và rủi ro lỗi thời chỉ bị phát hiện qua khủng hoảng.
- **Cấp 2, Phát triển:** Có một số tài liệu, nhưng không theo dõi có hệ thống về truy cập, độ lỗi thời hay khả năng tìm thấy.
- **Cấp 3, Chuẩn hóa:** Truy cập và độ lỗi thời được theo dõi cho các hệ thống quan trọng, và thời gian làm quen được đo như đại diện
  cho sức khỏe tri thức trên toàn tổ chức.
- **Cấp 4, Quản lý:** Các khoảng trống tài liệu được gộp vào backlog nợ kỹ thuật được ưu tiên, đối chiếu với rủi ro hệ số xe buýt để
  xác định các rủi ro kết hợp nghiêm trọng nhất.
- **Cấp 5, Điều phối:** Tổ chức chủ động xác định và giải quyết rủi ro tri thức quan trọng chưa ghi chép trước khi một đợt chuyển giao
  nhân sự buộc phải làm, và có thể chỉ ra những cải thiện cụ thể, đo được về làm quen hay ứng phó sự cố truy được về đầu tư vào tài
  liệu.

## Ý tưởng để thảo luận

1. Sự kết hợp nghiêm trọng nhất giữa hệ số xe buýt thấp và tài liệu kém của chúng ta lúc này là gì?
2. Câu hỏi nào bị hỏi lặp lại dù một câu trả lời được ghi chép đã tồn tại?
3. Làm sao chúng ta biết một tài liệu quan trọng đã trở nên lỗi thời và gây hiểu lầm?
4. Backlog nợ kỹ thuật của chúng ta có gồm các khoảng trống tài liệu, hay chúng vô hình?
5. Chúng ta sẽ tốn bao nhiêu nếu chuyên gia duy nhất của hệ thống ít được ghi chép nhất của mình rời đi trong năm nay?

## Những điểm chính cần nhớ

- Hãy đo **tính hữu ích, không đo sự tồn tại**: tài liệu có thực sự giúp ích không, dùng các đại diện như mẫu hình truy cập, độ lỗi
  thời và câu hỏi lặp lại.
- **Các câu hỏi lặp lại dù đã có câu trả lời được ghi chép** cho thấy một vấn đề khả năng tìm thấy, không nhất thiết là vấn đề công
  sức nội dung.
- **Thời gian làm quen để đóng góp hiệu quả** là một đại diện thực tế, mạnh cho sức khỏe tri thức nói chung.
- **Tri thức quan trọng chưa ghi chép là một rủi ro tích lũy**, đặc biệt khi kết hợp với hệ số xe buýt thấp (chủ đề 3.5); nó không tốn
  gì một cách hữu hình cho đến khi tốn rất nhiều trong một lần.
- Hãy gộp **các khoảng trống tài liệu vào backlog nợ kỹ thuật của bạn** (chủ đề 4.5) để chúng cạnh tranh công bằng cho năng lực được
  ưu tiên.

## Tài liệu tham khảo và đọc thêm

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*, của Jared Bhatti, Zachariah Goldberg, Ted Kubaska, và Sarah
  Moir (thực hành viết tài liệu thực tế cho các đội kỹ thuật).
- *A Philosophy of Software Design*, của John Ousterhout (mối quan hệ giữa tài liệu, độ phức tạp và khả năng bảo trì).
- *Team Topologies*, của Matthew Skelton và Manuel Pais (hệ quả thiết kế tổ chức của tri thức tập trung so với phân tán).
- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble, và Gene Kim (tài liệu là một trong những
  năng lực tương quan với hiệu suất phân phối).
