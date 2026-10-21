# 5.1 Tỷ lệ lỗi lọt và lỗi chất lượng thoát

## Tổng quan và động lực

**Tỷ lệ lỗi lọt (escaped defect rate)** đo các lỗi đến được production và ảnh hưởng người dùng thật, khác với các lỗi bị bắt sớm hơn
qua kiểm thử, đánh giá mã hay phân tích tĩnh, tất cả đều được bàn ở Phần 4 của cuốn sách này. Sự phân biệt này rất quan trọng: một lỗi
bị bắt trong đánh giá mã tốn vài phút để sửa và không người dùng nào thấy nó; cùng lỗi đó, nếu lọt tới production, có thể tốn hàng giờ
ứng phó sự cố, thiệt hại thật cho khách hàng và một vết lõm đo được vào lòng tin. Chỉ số này, theo nghĩa thật, là bảng điểm cuối cùng
cho mọi thứ Phần 4 bao quát, vì tỷ lệ lỗi lọt tăng dù các chỉ số chất lượng nội bộ mạnh (độ phức tạp, độ bao phủ, phân tích tĩnh) thường
có nghĩa là những tín hiệu nội bộ đó không thực sự bắt được các kiểu thất bại quan trọng với người dùng thật.

Chủ đề này đối xử với lỗi lọt bằng sự nghiêm túc mà chi phí của chúng xứng đáng, trong khi cưỡng lại cám dỗ coi số đếm thô như một bảng
tỷ số đơn giản. Không phải mọi lỗi đều như nhau: một lỗi chính tả trong văn bản trợ giúp hiếm khi xem và một lỗi hỏng dữ liệu trong hệ
thống giao dịch tài chính đều, về mặt kỹ thuật, là lỗi lọt, và coi chúng như nhau tạo ra một chỉ số hoặc quá nhiễu để hành động, hoặc tệ
hơn, gây hiểu lầm tích cực về nơi rủi ro thật nằm. Khuyến nghị cốt lõi của chủ đề này, theo dõi gia quyền theo mức nghiêm trọng với sự
chú ý cẩn thận đến cách lỗi được phân loại, nhắm thẳng vào vấn đề đó.

Với các đội lớn, tỷ lệ lỗi lọt là một trong những cầu nối rõ nhất giữa các chỉ số kỹ thuật nội bộ của cuốn sách này và thế giới hướng
khách hàng mà cả Phần 5 quan tâm. Các tổ chức doanh nghiệp dùng nó để biện minh đầu tư vào các thực hành kiểm thử và đánh giá của Phần
4; các tổ chức chính phủ, nơi một lỗi lọt có thể nghĩa là một phép tính trợ cấp sai hay một tương tác dịch vụ công thất bại, coi nó là
thước đo trực tiếp của lòng tin công chúng và rủi ro pháp lý, không chỉ là một thống kê kỹ thuật nội bộ.

## Các nguyên tắc chính

- **Tỷ lệ lỗi lọt là bảng điểm cuối cùng cho thực hành chất lượng nội bộ.** Một tỷ lệ tăng dù các chỉ số Phần 4 mạnh có nghĩa là các
  chỉ số đó không bắt được điều quan trọng.
- **Mức nghiêm trọng quan trọng hơn số đếm thô.** Hãy gia quyền lỗi theo tác động thực tế lên khách hàng hay kinh doanh, đừng coi mọi
  lỗi lọt như nhau.
- **Tính nhất quán của phân loại là thiết yếu.** Hai đội phân loại mức nghiêm trọng khác nhau tạo ra những con số không thể so sánh
  công bằng.
- **Chỉ số này dễ bị lách qua định nghĩa**, đúng như tỷ lệ thay đổi thất bại (chủ đề 2.10): thu hẹp điều được tính là "lỗi" làm đẹp con
  số mà không giảm thiệt hại thật cho khách hàng.
- **Phân loại nguyên nhân gốc biến một số đếm thành công cụ chẩn đoán.** Biết *vì sao* lỗi lọt có thể hành động hơn là chỉ biết có bao
  nhiêu lỗi.

## Khuyến nghị

### Gia quyền các lỗi lọt theo mức nghiêm trọng, dùng một thang nhất quán, được ghi chép

Hãy phân loại mọi lỗi lọt bằng một thang mức nghiêm trọng cố định (thường là nghiêm trọng, lớn, nhỏ, hoặc một thang đánh số tương đương)
dựa trên tác động thực tế lên khách hàng hay kinh doanh: mất hoặc hỏng dữ liệu, lộ bảo mật và tính năng hoàn toàn không dùng được nằm
ở đầu; một vấn đề hình thức không ảnh hưởng chức năng nằm ở cuối. Hãy theo dõi xu hướng gia quyền theo mức nghiêm trọng, không chỉ số
đếm thô, để một đợt tăng đột biến các vấn đề nhỏ không át về mặt hình ảnh một mức tăng nhỏ hơn nhưng hệ quả lớn hơn nhiều ở các vấn đề
nghiêm trọng.

### Chuẩn hóa tiêu chí phân loại giữa các đội

Các đội khác nhau để tự phân loại mức nghiêm trọng sẽ trôi về các chuẩn khác nhau, đội thận trọng, đội dễ dãi, khiến so sánh giữa các
đội vô nghĩa và, tệ hơn, tạo động cơ phân loại hạ xuống một cách rộng rãi để giữ con số của chính đội trông đẹp hơn (một biến thể của
việc lách qua định nghĩa ở chủ đề 1.2). Hãy công bố tiêu chí phân loại rõ ràng, dựa trên ví dụ, và định kỳ kiểm toán một mẫu các phân
loại giữa các đội để kiểm tra tính nhất quán.

### Theo dõi [nguyên nhân gốc](https://en.wikipedia.org/wiki/Root_cause_analysis), không chỉ số đếm và mức nghiêm trọng

Với mỗi lỗi lọt, hãy ghi lại vì sao nó lọt: một khoảng trống kiểm thử, một trường hợp biên bị bỏ sót trong yêu cầu, một khác biệt môi
trường giữa staging và production, một lần đánh giá bỏ sót vấn đề. Hãy tổng hợp dữ liệu nguyên nhân gốc này theo thời gian để tìm các
mẫu hệ thống; nếu một nhóm cụ thể (chẳng hạn lỗi do khác biệt môi trường) chiếm ưu thế trong các lỗi lọt của bạn, điều đó chỉ thẳng
vào một khoảng trống quy trình cụ thể, sửa được thay vì một lời kêu gọi chung chung mơ hồ "kiểm thử nhiều hơn".

### Nối các lỗi lọt trở lại các tín hiệu chất lượng nội bộ nơi chúng bắt nguồn

Khi có thể, hãy truy một lỗi lọt về khu vực mã nó đến từ đó và kiểm tra xem khu vực đó có cho thấy dấu hiệu cảnh báo trong các chỉ số
của Phần 4 không: nó có phải điểm nóng độ phức tạp không (chủ đề 4.1, chủ đề 4.3), nó có tỷ lệ giết đột biến thấp không (chủ đề 4.2),
phân tích tĩnh có gắn cờ gì gần đó không (chủ đề 4.4). Sự kết nối này là điều xác nhận liệu các chỉ số chất lượng nội bộ của bạn có
thực sự dự đoán được lỗi hướng khách hàng thật, hay chúng đang đo thứ không, trong bối cảnh cụ thể của bạn, tương quan với điều khách
hàng thực sự trải nghiệm.

### Đề phòng việc phân loại lỗi trở thành một bài tập đổ lỗi

Hãy định khung phân tích nguyên nhân gốc của lỗi tường minh như một câu hỏi về hệ thống, theo khung chẩn đoán của chủ đề 1.1, không
phải bài tập đổ lỗi cá nhân. Một đội sợ bị đổ lỗi cho một lỗi lọt có động cơ mạnh để báo cáo thiếu, phân loại hạ xuống, hoặc cưỡng lại
phân tích nguyên nhân gốc kỹ lưỡng, tất cả đều làm hỏng chính dữ liệu mà chủ đề này dựa vào. Thực hành hậu kiểm không đổ lỗi, được bàn
sâu hơn trong chủ đề 6.2, áp dụng trực tiếp ở đây.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Số đếm lỗi lọt thô | Đơn giản để báo cáo | Coi lỗi chính tả và lỗi hỏng dữ liệu như nhau; nhiễu và gây hiểu lầm |
| Theo dõi gia quyền theo mức nghiêm trọng | Phản ánh tác động thực tế lên khách hàng chính xác hơn | Cần phân loại nhất quán, có kỷ luật |
| Chuẩn phân loại độc lập theo đội | Linh hoạt, chi phí phối hợp thấp | Tạo ra các con số không so sánh được giữa các đội; mời gọi trôi dạt về phía dễ dãi |
| Phân loại được chuẩn hóa, được kiểm toán | Công bằng, so sánh được, chống lách | Cần quản trị liên tục và công sức kiểm toán định kỳ |

Sự căng thẳng trung tâm là **linh hoạt cục bộ so với khả năng so sánh giữa các đội**. Để mỗi đội phân loại mức nghiêm trọng của lỗi theo
cách hợp bối cảnh của riêng mình thì đơn giản hơn để triển khai nhưng tạo ra những con số không thể so sánh hay tổng hợp công bằng ở
cấp tổ chức, và tạo ra một động cơ âm thầm để một đội phân loại rộng rãi nhằm bảo vệ chỉ số của chính mình. Hãy giải quyết sự căng
thẳng bằng cách đầu tư vào tiêu chí phân loại chuẩn hóa, được ghi chép và các cuộc kiểm toán chéo giữa các đội định kỳ, coi đây là
công việc quản trị (chủ đề 1.4) đáng đầu tư vì chỉ số này nối trực tiếp đến tác động khách hàng thật.

## Câu hỏi để thảo luận với đội của bạn

1. **Chúng ta có theo dõi lỗi lọt theo mức nghiêm trọng, hay một số đếm thô coi một vấn đề hình thức nhỏ giống một vấn đề dữ liệu nghiêm
   trọng?** Hãy mở bảng điều khiển thực tế của bạn và kiểm tra; nếu gia quyền theo mức nghiêm trọng chưa có, đây là thay đổi giá trị
   nhất mà chủ đề này khuyến nghị.

2. **Hai đội khác nhau có phân loại mức nghiêm trọng của cùng một lỗi theo cùng cách không, hay việc phân loại đã trôi xa nhau trên
   toàn tổ chức?** Hãy chọn một lỗi thật, mơ hồ trong quá khứ và nhờ đại diện của hai đội khác nhau phân loại độc lập; so sánh kết quả
   một cách thành thật.

3. **Nguyên nhân gốc phổ biến nhất của các lỗi lọt của chúng ta là gì, và quy trình hiện tại có thực sự xử lý nó không, hay chúng ta cứ
   đáp lại từng sự cố riêng lẻ khi chúng xảy ra?** Hãy tổng hợp dữ liệu nguyên nhân gốc của vài tháng qua và tìm mẫu chiếm ưu thế.

4. **Các lỗi lọt của chúng ta có truy ngược về những khu vực mà các chỉ số chất lượng nội bộ (độ phức tạp, độ bao phủ, phân tích tĩnh)
   đã gắn cờ là rủi ro không?** Sự kết nối này xác nhận các chỉ số Phần 4 của bạn có thực sự dự đoán được trong bối cảnh cụ thể của bạn
   hay đang bỏ sót những kiểu thất bại thật sự quan trọng.

5. **Quy trình phân loại lỗi của chúng ta có an toàn không, hay các kỹ sư sợ bị đổ lỗi khi báo cáo hay phân loại một lỗi họ có liên
   quan?** Một văn hóa dễ đổ lỗi làm hỏng dữ liệu này một cách hệ thống qua báo cáo thiếu và phân loại dễ dãi; hãy thành thật về văn hóa
   hiện tại của bạn ở đây.

6. **Tỷ lệ lỗi lọt của chúng ta đã bao giờ cải thiện nhanh đáng ngờ mà không có thay đổi tương ứng trong thực hành kiểm thử hay đánh
   giá chưa?** Như với tỷ lệ thay đổi thất bại (chủ đề 2.10), đây là dấu hiệu rõ nhất rằng tiêu chí phân loại, không phải rủi ro thật,
   đã dịch chuyển.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Phân loại mức nghiêm trọng chính thức thường không cần thiết với số lượng lỗi nhỏ và một đội nhỏ có thể bàn trực tiếp
từng lỗi. Thói quen đáng áp dụng sớm đơn giản là theo dõi lỗi nhất quán ngay từ đầu, dù không chính thức, để dữ liệu lịch sử tồn tại
khi đội đủ lớn để cần phân tích chính thức hơn.

**Doanh nghiệp nhỏ.** Một thang mức nghiêm trọng chung đơn giản, dù chỉ ba mức (nghiêm trọng, lớn, nhỏ), áp dụng nhất quán bởi ai xử
lý hỗ trợ và phân loại lỗi, nắm được phần lớn giá trị của chủ đề này mà không cần công cụ phức tạp hay một chức năng chất lượng chuyên
trách.

**Doanh nghiệp lớn.** Tính nhất quán phân loại giữa các đội là khoản đầu tư đòn bẩy cao nhất ở đây, vì các chuẩn không nhất quán trên
hàng chục đội làm so sánh chất lượng toàn tổ chức vô nghĩa. Hãy đầu tư vào tiêu chí phân loại được ghi chép, dựa trên ví dụ và kiểm
toán định kỳ, và nối các lỗi lọt một cách có hệ thống trở lại các tín hiệu chất lượng nội bộ của Phần 4 để xác nhận tín hiệu nào thực
sự dự đoán được cho tổ chức của bạn.

**Chính phủ.** Một lỗi lọt trong hệ thống hướng công chúng hoặc tính trợ cấp mang sức nặng pháp lý và lòng tin công chúng vượt chi phí
kỹ thuật của nó. Hãy đối xử với phân loại mức nghiêm trọng đặc biệt chặt chẽ cho các lỗi ảnh hưởng dịch vụ hướng công dân, và chuẩn bị
để các quyết định phân loại chịu sự soi xét bên ngoài, một lập luận mạnh cho tiêu chí được ghi chép, kiểm toán, nhất quán thay vì các
phán đoán tùy hứng.

## Ví dụ

**Doanh nghiệp lớn.** Số lỗi lọt của một công ty phần mềm thuê bao đã tăng trong hai quý, và mối lo ban đầu tập trung vào con số thô.
Phân tích gia quyền theo mức nghiêm trọng cho thấy mức tăng gần như hoàn toàn nằm ở các vấn đề nhỏ, hình thức, trùng với một đợt thiết
kế lại giao diện gần đây, trong khi các lỗi nghiêm trọng và lớn thực ra giảm nhẹ trong cùng kỳ. Phân tích nguyên nhân gốc của đợt tăng
đột biến vấn đề nhỏ chỉ ra một khoảng trống trong kiểm thử hồi quy hình ảnh riêng cho các thành phần giao diện mới, một bản sửa có mục
tiêu, chi phí thấp mà hoàn toàn sẽ bị bỏ lỡ nếu đội phản ứng với con số thô, không gia quyền như một khủng hoảng chất lượng không phân
biệt.

**Chính phủ.** Hệ thống tính trợ cấp của một cơ quan thất nghiệp tiểu bang có một lỗi lọt đã từ chối sai một tỷ lệ nhỏ hồ sơ đủ điều
kiện trong vài tháng trước khi bị phát hiện. Một cuộc điều tra nguyên nhân gốc phát hiện lỗi bắt nguồn từ một khu vực mã trước đó đã
được gắn cờ là điểm nóng độ phức tạp (chủ đề 4.1, chủ đề 4.3) trong một đợt rà soát chất lượng nội bộ mười tám tháng trước, nhưng điểm
nóng chưa bao giờ được ưu tiên khắc phục vì chưa có lỗi nào xảy ra để làm rủi ro trở nên cụ thể. Quy trình sửa đổi của cơ quan giờ gia
quyền tường minh các khu vực bị gắn cờ điểm nóng cao hơn trong ưu tiên kiểm thử và đánh giá, chính vì mối liên hệ đã được chứng minh,
xác nhận này giữa tín hiệu độ phức tạp nội bộ và rủi ro lỗi lọt thật.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của việc theo dõi tỷ lệ lỗi lọt một cách chặt chẽ, với gia quyền theo mức nghiêm trọng và phân tích nguyên nhân gốc, là khả
năng hướng đầu tư chất lượng vào nơi nó thực sự giảm thiệt hại hướng khách hàng, thay vì phản ứng với một số đếm không phân biệt trộn
lẫn vấn đề tầm thường và nghiêm trọng bừa bãi. Ví dụ phần mềm thuê bao ở trên cho thấy rõ điều này: phản ứng theo số đếm thô sẽ kích
hoạt một sáng kiến chất lượng rộng, thiếu tập trung, trong khi phản ứng gia quyền theo mức nghiêm trọng, dựa trên nguyên nhân gốc đã
xác định một bản sửa cụ thể, rẻ, có mục tiêu.

Tổng chi phí sở hữu gồm kỷ luật phân loại (tiêu chí nhất quán, kiểm toán định kỳ) và công sức theo dõi nguyên nhân gốc, cả hai chủ yếu
là đầu tư quy trình hơn là chi phí công cụ. Khoản đầu tư đó tự hoàn vốn trực tiếp trong chi phí thiệt hại khách hàng và ứng phó sự cố
được tránh nhờ hướng công sức chất lượng vào các nguồn rủi ro lỗi lọt thực sự, đã được xác nhận.

## Phản mẫu và cạm bẫy

- **Coi số đếm lỗi thô là chỉ số:** trộn lẫn vấn đề tầm thường và nghiêm trọng và che khuất tín hiệu thật.
- **Phân loại mức nghiêm trọng không nhất quán giữa các đội:** làm so sánh giữa các đội vô nghĩa và mời gọi trôi dạt về phía phân loại
  dễ dãi.
- **Không theo dõi nguyên nhân gốc:** biến một số đếm thành con số không có giá trị chẩn đoán, để các mẫu hệ thống vô hình.
- **Một văn hóa báo cáo dễ đổ lỗi:** làm hỏng dữ liệu qua báo cáo thiếu và phân loại dễ dãi, đúng rủi ro phơi bày động cơ mà chủ đề 1.2
  cảnh báo.
- **Không bao giờ nối lỗi lọt trở lại các tín hiệu chất lượng nội bộ:** bỏ lỡ cơ hội xác nhận, hoặc bác bỏ, các chỉ số dự đoán của
  Phần 4 so với kết quả thật.
- **Một cải thiện nhanh đáng ngờ mà không có thay đổi quy trình phía sau:** dấu hiệu rõ nhất rằng tiêu chí phân loại, không phải rủi ro
  thật, đã dịch chuyển.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Lỗi lọt được theo dõi, nếu có, như một số đếm thô, không gia quyền theo mức nghiêm trọng hay phân tích nguyên
  nhân gốc.
- **Cấp 2, Phát triển:** Có một số phân loại mức nghiêm trọng, nhưng chuẩn khác nhau giữa các đội và theo dõi nguyên nhân gốc không
  nhất quán.
- **Cấp 3, Chuẩn hóa:** Phân loại mức nghiêm trọng được chuẩn hóa và ghi chép trên toàn tổ chức, với phân loại nguyên nhân gốc áp dụng
  nhất quán.
- **Cấp 4, Quản lý:** Lỗi lọt được truy một cách có hệ thống về các tín hiệu chất lượng nội bộ để xác nhận giá trị dự đoán của chúng, và
  việc phân loại được kiểm toán định kỳ về tính nhất quán.
- **Cấp 5, Điều phối:** Tổ chức có thể chỉ ra những lần giảm cụ thể, đo được về tỷ lệ lỗi lọt truy được về đầu tư chất lượng có mục
  tiêu, dựa trên nguyên nhân gốc, được xác nhận so với các tín hiệu chất lượng nội bộ.

## Ý tưởng để thảo luận

1. Lỗi lọt hàng đầu của chúng ta quý trước có được một đội khác phân loại theo cùng cách không?
2. Nguyên nhân gốc phổ biến nhất của các lỗi lọt của chúng ta là gì, và chúng ta có thực sự xử lý nó không?
3. Có lỗi lọt nào từng truy ngược về một khu vực mà các chỉ số nội bộ của chúng ta đã gắn cờ chưa?
4. Đội của chúng ta có thấy an toàn khi báo cáo và phân loại trung thực một lỗi họ gây ra không?
5. Một cái nhìn gia quyền theo mức nghiêm trọng về số lỗi hiện tại của chúng ta sẽ cho thấy điều gì mà số đếm thô che giấu?

## Những điểm chính cần nhớ

- Tỷ lệ lỗi lọt là **bảng điểm cuối cùng** cho thực hành chất lượng nội bộ; một tỷ lệ tăng dù các chỉ số Phần 4 mạnh có nghĩa là các
  chỉ số đó không bắt được điều quan trọng.
- **Hãy gia quyền theo mức nghiêm trọng**, dùng một thang phân loại nhất quán, được ghi chép, được kiểm toán, không bao giờ chỉ dùng số
  đếm thô.
- Hãy theo dõi **nguyên nhân gốc**, không chỉ số đếm và mức nghiêm trọng, để biến chỉ số thành công cụ chẩn đoán thật.
- **Hãy nối lỗi lọt trở lại các tín hiệu chất lượng nội bộ** (độ phức tạp, độ bao phủ, phân tích tĩnh) để xác nhận các tín hiệu đó có
  thực sự dự đoán được không.
- Hãy đề phòng một **văn hóa dễ đổ lỗi** làm hỏng việc báo cáo và phân loại qua báo cáo thiếu và trôi dạt về phía dễ dãi.

## Tài liệu tham khảo và đọc thêm

- *Site Reliability Engineering*, do Betsy Beyer, Chris Jones, Jennifer Petoff, và Niall Richard Murphy biên tập (thực hành hậu kiểm
  không đổ lỗi áp dụng cho phân tích nguyên nhân gốc của lỗi).
- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble, và Gene Kim (mối quan hệ giữa thực hành
  phân phối và kết quả chất lượng).
- *Code Complete*, của Steve McConnell (thực hành phân loại lỗi và phân tích nguyên nhân gốc).
- *The Field Guide to Understanding Human Error*, của Sidney Dekker (khung hệ thống, không đổ lỗi để điều tra thất bại).
