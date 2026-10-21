# 4.3 Mức thay đổi mã và phân tích điểm nóng

## Tổng quan và động lực

**Mức thay đổi mã (code churn)** đo mức độ thường xuyên một tệp hay mô-đun thay đổi theo thời gian: số dòng được thêm, sửa và xóa qua
các lần commit liên tiếp. Riêng mức thay đổi chỉ là một tín hiệu khá yếu: một số tệp thay đổi nhiều vì đang được phát triển tích cực,
lành mạnh, còn một số hiếm khi thay đổi vì chúng ổn định và đúng, không phải vì bị bỏ bê. Sức chẩn đoán thực sự của cách tiếp cận
trong chủ đề này đến từ việc kết hợp mức thay đổi với độ phức tạp (chủ đề 4.1): một tệp vừa thay đổi thường xuyên vừa rất phức tạp, một
**điểm nóng (hotspot)**, có khả năng cao hơn hẳn là nguồn lỗi và là vật cản tốc độ của đội, và nghiên cứu thực nghiệm khẳng định
điều này nhất quán trên nhiều cơ sở mã và tổ chức.

**Phân tích điểm nóng**, được Adam Tornhill phổ biến qua công trình về phân tích phần mềm, đặc biệt có giá trị vì nó không đòi hỏi
khảo sát thủ công hay phán đoán chủ quan để tìm ra mục tiêu. Lịch sử [kiểm soát phiên bản](https://en.wikipedia.org/wiki/Version_control)
đã chứa mọi thứ cần thiết để tính mức thay đổi và, kết hợp với công cụ phân tích tĩnh, cả độ phức tạp, cho mọi tệp trong cơ sở mã một
cách tự động. Điều này cho phép một đội hay tổ chức xác định, bằng bằng chứng thực chứ không bằng giai thoại hay lời phàn nàn to
nhất trong buổi nhìn lại, chính xác phần nhỏ nào của cơ sở mã đáng được chú ý tái cấu trúc trước.

Với các đội lớn, phân tích điểm nóng giải quyết một bài toán phân bổ thật: một cơ sở mã hàng trăm nghìn dòng có nhiều mã hơn bất kỳ
đội nào có thể đủ sức tái cấu trúc toàn diện, và trực giác về nơi các vấn đề tệ nhất nằm thường sai, bị lệch bởi người phàn nàn gần
đây nhất hay tệp mà một kỹ sư cấp cao tình cờ không ưa. Các tổ chức doanh nghiệp và chính phủ quản lý cơ sở mã lớn, tồn tại lâu dài
dựa vào việc ưu tiên theo dữ liệu này để hướng ngân sách tái cấu trúc thực sự khan hiếm vào mã sẽ đem lại lợi tức lớn nhất.

## Các nguyên tắc chính

- **Riêng mức thay đổi là tín hiệu yếu; mức thay đổi kết hợp độ phức tạp là tín hiệu mạnh.** Sự kết hợp, không phải riêng chỉ số nào, mới
  xác định một điểm nóng thật.
- **Phân tích điểm nóng không cần khảo sát thủ công.** Lịch sử kiểm soát phiên bản đã chứa mọi thứ cần để tính nó tự động.
- **Điểm nóng là tín hiệu ưu tiên, không phải phán quyết tự động.** Vẫn cần phán đoán của con người để quyết định hành động nào phù
  hợp với một điểm nóng cụ thể.
- **Thay đổi thường xuyên không vốn dĩ là xấu.** Một phần mức thay đổi phản ánh sự phát triển tích cực, lành mạnh chứ không phải vấn đề
  chất lượng.
- **Phân tích này mở rộng đúng nơi trực giác thất bại**: ở các cơ sở mã lớn đến mức không cá nhân nào có thể khảo sát và ưu tiên chỉ
  bằng cảm tính.

## Khuyến nghị

### Tính mức thay đổi và độ phức tạp cùng nhau, và xếp hạng theo sự kết hợp của chúng

Hãy trích tần suất thay đổi theo từng tệp từ lịch sử kiểm soát phiên bản trong một khoảng thời gian có ý nghĩa, thường từ sáu tháng
đến một năm, và ghép nó với một thước đo độ phức tạp (chủ đề 4.1) cho cùng các tệp. Hãy xếp hạng tệp theo sự kết hợp, thường là tích
của mức thay đổi và độ phức tạp, thay vì theo riêng chỉ số nào, vì chính sự kết hợp này là thứ nghiên cứu nền tảng nhất quán gắn với tỷ
lệ lỗi và chi phí bảo trì tăng cao.

### Điều tra các điểm nóng hàng đầu bằng phán đoán của con người trước khi hành động

Một danh sách điểm nóng đã xếp hạng xác định các ứng viên cần chú ý, không phải một danh sách hành động tự động. Với mỗi điểm nóng
hàng đầu, hãy điều tra bằng con mắt con người: đây có thực sự là mã thiết kế kém cần tái cấu trúc, hay là một tệp chính đáng cần
thay đổi thường xuyên vì nó nằm ở trung tâm logic nghiệp vụ đang phát triển, trong trường hợp đó ưu tiên có thể là kiểm thử tốt hơn
hoặc tài liệu rõ ràng hơn chứ không phải viết lại cấu trúc. Điều này phản chiếu sự phân biệt độ phức tạp thiết yếu và ngẫu nhiên của
chủ đề 4.1, áp dụng ở đây cho tín hiệu kết hợp mức thay đổi và độ phức tạp.

### Đối chiếu các điểm nóng với dữ liệu sự cố và lỗi

Nếu có, hãy kiểm tra xem các điểm nóng đã xác định có tương quan với sự cố sản xuất thực tế (chủ đề 6.2) hay dữ liệu lỗi lọt (chủ đề
5.1) hay không. Tương quan mạnh xác nhận phân tích điểm nóng thực sự có tính dự đoán cho cơ sở mã cụ thể của bạn và củng cố cơ sở
kinh doanh để hành động; tương quan yếu hay không có gợi ý hoặc là vấn đề chất lượng dữ liệu, hoặc là mức thay đổi và độ phức tạp, trong
bối cảnh cụ thể của bạn, không phải tổ hợp tín hiệu phù hợp để ưu tiên.

### Theo dõi xu hướng điểm nóng qua các lần phân tích liên tiếp, không chỉ một ảnh chụp

Hãy chạy lại phân tích điểm nóng định kỳ, hằng quý là phổ biến, và theo dõi xem các điểm nóng đã xác định trước đó đang cải thiện,
xấu đi hay đã được giải quyết, và liệu có điểm nóng mới nổi lên không. Một điểm nóng tồn tại qua nhiều chu kỳ phân tích dù được gắn
cờ nhiều lần cho thấy hoặc công sức khắc phục thực ra chưa được áp dụng, hoặc một nỗ lực khắc phục trước đó không giải quyết vấn đề
gốc thực sự.

### Dùng dữ liệu điểm nóng để thông tin cho, không thay thế, các cuộc trao đổi ưu tiên của đội

Hãy trình bày phân tích điểm nóng như bằng chứng trong một cuộc thảo luận ưu tiên, không phải một mệnh lệnh tự động đè lên phán đoán
theo bối cảnh của chính đội về điều quan trọng nhất lúc này. Một đội có thể có lý do chính đáng để tạm hoãn một điểm nóng đã biết,
chẳng hạn một đợt viết lại đã lên kế hoạch sắp tới khiến việc tái cấu trúc từng bước thành công sức lãng phí, và phân tích nên thông
tin cho cuộc trao đổi đó, không thay thế nó.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Ưu tiên dựa trên trực giác | Nhanh, không cần công cụ, tận dụng hiểu biết bối cảnh của đội | Bị lệch bởi tính gần đây, sở thích cá nhân và người phàn nàn to nhất |
| Chỉ mức thay đổi | Đơn giản để tính | Tín hiệu yếu khi đứng riêng; thay đổi thường xuyên không vốn dĩ là xấu |
| Mức thay đổi kết hợp độ phức tạp (phân tích điểm nóng) | Mạnh, dựa trên bằng chứng, tự động từ dữ liệu sẵn có | Cần kết hợp hai nguồn dữ liệu và diễn giải kết quả bằng phán đoán |
| Phân tích điểm nóng đối chiếu với dữ liệu sự cố | Được xác nhận, bằng chứng mạnh nhất để ưu tiên | Cần liên kết đáng tin cậy giữa sự cố và mã, thứ không phải tổ chức nào cũng có |

Sự căng thẳng trung tâm là **bằng chứng so với bối cảnh**. Phân tích điểm nóng cung cấp bằng chứng khách quan, có thể mở rộng mà ưu
tiên dựa trên trực giác không thể sánh được ở quy mô một cơ sở mã lớn, lạ lẫm hay tồn tại lâu, nhưng nó thiếu phán đoán theo bối cảnh
mà đội có về việc vì sao một điểm nóng nhất định quan trọng, hay không, lúc này. Hãy giải quyết sự căng thẳng bằng cách coi phân tích
điểm nóng là nền bằng chứng cho một cuộc trao đổi ưu tiên, kết hợp với, không bao giờ thay thế, phán đoán theo bối cảnh của chính đội
về thời điểm và đánh đổi.

## Câu hỏi để thảo luận với đội của bạn

1. **Năm điểm nóng hàng đầu của chúng ta, xếp hạng theo mức thay đổi và độ phức tạp kết hợp, là gì, và thứ hạng đó có khớp với trực giác
   của đội về nơi các vấn đề tệ nhất nằm không?** Hãy chạy phân tích và so kết quả với điều đội bạn đã đoán trước khi thấy dữ liệu;
   những chỗ lệch thường là phát hiện giá trị nhất.

2. **Các điểm nóng đã xác định của chúng ta có tương quan với sự cố sản xuất thực tế hay dữ liệu lỗi lọt không?** Nếu bạn có dữ liệu
   để kiểm tra, hãy kiểm tra trực tiếp; nếu không, chính khoảng trống đó đáng được nêu tên như một thứ cần xây dựng dần.

3. **Với điểm nóng hàng đầu hiện tại của chúng ta, vấn đề gốc là độ phức tạp thiết yếu cần thay đổi thường xuyên một cách chính đáng,
   hay độ phức tạp ngẫu nhiên mà một lần tái cấu trúc có thể thực sự sửa?** Hãy cùng xem qua tệp và đưa ra phán đoán này một cách
   tường minh thay vì mặc định cả hai câu trả lời.

4. **Có điểm nóng nào đã xác định trước đó tồn tại qua nhiều chu kỳ phân tích dù đã được gắn cờ không?** Nếu có, hãy điều tra thành
   thật vì sao: việc khắc phục chưa từng thực sự được thử, hay một nỗ lực trước đó không giải quyết nguyên nhân gốc thực sự.

5. **Hiện nay chúng ta ưu tiên công việc tái cấu trúc dựa trên bằng chứng, hay dựa trên người phàn nàn gần đây nhất hoặc to nhất?**
   Hãy thành thật về quy trình ưu tiên hiện tại thực tế của đội và nó so với điều một phân tích điểm nóng dựa trên bằng chứng sẽ gợi ý
   ra sao.

6. **Việc để điểm nóng hàng đầu hiện tại không được giải quyết thêm một năm sẽ khiến chúng ta tốn bao nhiêu, về tỷ lệ lỗi hay độ chậm
   phân phối?** Câu hỏi này buộc phải có một ước tính chi phí cụ thể để neo quyết định ưu tiên, thay vì để điểm nóng là một mối bận
   tâm trừu tượng, dễ bị hoãn.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Phân tích điểm nóng chính thức thường không cần thiết với một cơ sở mã nhỏ, còn non mà cả đội vẫn cùng nắm trong đầu.
Kỹ thuật này trở nên có giá trị đúng khi cơ sở mã đã lớn vượt kích thước mà không cá nhân nào có thể đáng tin cậy xác định các khu
vực tệ nhất chỉ bằng trí nhớ, thường vào khoảng một hai năm đầu tăng trưởng bền vững.

**Doanh nghiệp nhỏ.** Công cụ miễn phí hoặc chi phí thấp có thể trích dữ liệu mức thay đổi thẳng từ lịch sử kiểm soát phiên bản hiện có
với thiết lập tối thiểu; hãy kết hợp nó với dữ liệu độ phức tạp mà công cụ lint hoặc phân tích tĩnh hiện có của bạn đã báo cáo, thay
vì đầu tư vào phần mềm phân tích điểm nóng thương mại chuyên dụng ở quy mô này.

**Doanh nghiệp lớn.** Phân tích điểm nóng là nơi ưu tiên dựa trên bằng chứng đem lại lợi tức lớn nhất, vì trực giác thực sự thất bại ở
quy mô một cơ sở mã gồm hàng trăm dịch vụ và hàng nghìn tệp. Hãy đầu tư chạy phân tích này đều đặn trên toàn cơ sở mã và đối chiếu
với dữ liệu sự cố để xây dựng một luận cứ đã được xác nhận, bảo vệ được cho khoản đầu tư tái cấu trúc.

**Chính phủ.** Các hệ thống tồn tại lâu, đôi khi hàng chục năm, rất hợp với phân tích điểm nóng, vì lịch sử kiểm soát phiên bản tích
lũy cung cấp một tín hiệu dài hạn phong phú về những phần nào của hệ thống đã thực sự gây rắc rối theo thời gian. Cách tiếp cận dựa
trên bằng chứng này cũng là một công cụ cụ thể, thuyết phục để biện minh cho đầu tư hiện đại hóa với các bên liên quan cần nhiều hơn ý
kiến không chính thức của một kỹ sư để phê duyệt kinh phí.

## Ví dụ

**Doanh nghiệp lớn.** Nền tảng xử lý bồi thường của một công ty bảo hiểm, gồm hơn hai triệu dòng mã trên hàng chục dịch vụ, đã tích tụ
nhiều năm phàn nàn không chính thức rằng "mô-đun xác thực bồi thường" gây rắc rối, nhưng chưa từng có sự ưu tiên chính thức nào theo
sau những lời phàn nàn đó. Một phân tích điểm nóng kết hợp sáu tháng dữ liệu mức thay đổi với điểm độ phức tạp đã xác định một tệp hoàn
toàn khác, một tiện ích chuyển đổi tiền tệ dùng chung chôn sâu trong một phụ thuộc hiếm được nhắc đến, là điểm nóng hàng đầu thực sự,
một tệp chưa từng xuất hiện trong bất kỳ lời phàn nàn nào ở các buổi nhìn lại. Đối chiếu với dữ liệu sự cố xác nhận tiện ích này liên
quan đến một tỷ lệ lỗi tính toán tài chính cao không cân xứng trong năm trước, và một đợt tái cấu trúc có mục tiêu riêng tiện ích đó,
thay vì mô-đun mà mọi người vẫn không chính thức đổ lỗi, đã giảm đo được các sự cố liên quan trong quý tiếp theo.

**Chính phủ.** Hệ thống cấp giấy phép lái xe hàng chục năm tuổi của một cơ quan phương tiện cơ giới tiểu bang đã trải qua phân tích
điểm nóng như một phần của cơ sở kinh doanh hiện đại hóa. Phân tích xác định một cụm nhỏ tệp, chiếm dưới 3% tổng cơ sở mã, chịu trách
nhiệm cho phần mức thay đổi và độ phức tạp cao không cân xứng, và đối chiếu với nhật ký sự cố của cơ quan cho thấy chính cụm này chiếm
gần 40% mọi lỗi hệ thống được báo cáo trong ba năm trước. Phát hiện cụ thể, dựa trên bằng chứng này, thuyết phục hơn nhiều so với
tuyên bố chung chung rằng "hệ thống đã cũ và cần hiện đại hóa", đã trở thành trọng tâm của một đề nghị ngân sách thành công cho một
nỗ lực hiện đại hóa từng bước, có mục tiêu, tập trung riêng vào cụm đó thay vì một đợt thay thế toàn hệ thống đắt hơn nhiều.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của phân tích điểm nóng là đầu tư có mục tiêu, dựa trên bằng chứng: cả hai ví dụ trên cho thấy một trường hợp phân tích chính
thức đã chuyển sự chú ý tái cấu trúc khỏi nơi lời phàn nàn không chính thức tập trung và hướng sang nơi dữ liệu thực sự cho thấy vấn
đề nằm, đem lại lợi tức tốt hơn đo được so với một khoản đầu tư không có mục tiêu hay theo trực giác.

Tổng chi phí sở hữu thấp, vì dữ liệu mức thay đổi đến thẳng từ lịch sử kiểm soát phiên bản hiện có và dữ liệu độ phức tạp thường đã sẵn có
từ công cụ phân tích tĩnh (chủ đề 4.4); khoản đầu tư chính là công sức phân tích định kỳ và thời gian phán đoán của con người để diễn
giải kết quả và quyết định hành động nào phù hợp với từng điểm nóng đã xác định.

## Phản mẫu và cạm bẫy

- **Chỉ dùng mức thay đổi mà không có độ phức tạp:** một tín hiệu yếu khi đứng riêng, có thể gắn cờ nhầm mã lành mạnh, đang phát triển
  tích cực.
- **Coi bảng xếp hạng điểm nóng như danh sách hành động tự động, không có phán đoán của con người:** bỏ lỡ sự phân biệt thiết yếu và
  ngẫu nhiên vốn quyết định phản ứng đúng.
- **Ưu tiên tái cấu trúc theo lời phàn nàn to nhất thay vì bằng chứng:** thường hướng công sức sai khỏi nơi dữ liệu thực sự cho thấy
  vấn đề nằm.
- **Không bao giờ đối chiếu điểm nóng với dữ liệu sự cố hay lỗi:** bỏ lỡ bước xác nhận củng cố luận cứ để hành động theo phân tích.
- **Chạy phân tích một lần rồi không bao giờ lặp lại:** bỏ lỡ việc công sức khắc phục có thực sự hiệu quả theo thời gian hay không.
- **Phớt lờ một điểm nóng liên tục bị gắn cờ mà không điều tra vì sao việc khắc phục không bền:** lãng phí giá trị chẩn đoán của các
  lần phân tích lặp lại.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Ưu tiên tái cấu trúc được đặt theo trực giác hay khối lượng phàn nàn, không có dữ liệu mức thay đổi hay độ phức
  tạp thông tin cho quyết định.
- **Cấp 2, Phát triển:** Một số đội kiểm tra không chính thức dữ liệu mức thay đổi hoặc độ phức tạp, nhưng không có thực hành phân tích
  điểm nóng nhất quán trên toàn tổ chức.
- **Cấp 3, Chuẩn hóa:** Phân tích điểm nóng kết hợp mức thay đổi và độ phức tạp chạy đều đặn và nhất quán thông tin cho việc ưu tiên tái
  cấu trúc trên toàn tổ chức.
- **Cấp 4, Quản lý:** Các điểm nóng được đối chiếu với dữ liệu sự cố và lỗi để xác nhận phân tích, và xu hướng qua các chu kỳ liên
  tiếp được theo dõi tích cực.
- **Cấp 5, Điều phối:** Tổ chức có thể chỉ ra những cải thiện cụ thể, đo được về tỷ lệ lỗi hoặc phân phối từ đầu tư tái cấu trúc dựa
  trên điểm nóng, và phân tích là một đầu vào thường xuyên, đáng tin cậy cho các quyết định đầu tư kỹ thuật.

## Ý tưởng để thảo luận

1. Danh sách điểm nóng hàng đầu của chúng ta sẽ trông thế nào nếu chạy phân tích này hôm nay?
2. Danh sách đó sẽ khớp hay mâu thuẫn với cảm nhận không chính thức hiện tại của đội về các khu vực vấn đề tệ nhất?
3. Chúng ta có dữ liệu để đối chiếu các điểm nóng với sự cố thực tế không?
4. Có khu vực vấn đề đã biết nào tồn tại dù đã cố sửa trước đây không, và vì sao?
5. Việc để điểm nóng hàng đầu hiện tại không được giải quyết thêm một năm sẽ khiến chúng ta tốn bao nhiêu?

## Những điểm chính cần nhớ

- **Mức thay đổi kết hợp độ phức tạp** xác định các điểm nóng thật đáng tin cậy hơn nhiều so với riêng chỉ số nào.
- Phân tích điểm nóng **không cần khảo sát thủ công**; nó tính được tự động từ dữ liệu kiểm soát phiên bản và phân tích tĩnh sẵn có.
- Hãy coi bảng xếp hạng điểm nóng là **bằng chứng để ưu tiên**, không phải phán quyết tự động; vẫn cần phán đoán của con người.
- **Hãy đối chiếu các điểm nóng với dữ liệu sự cố và lỗi** để xác nhận phân tích và củng cố luận cứ để hành động theo nó.
- Hãy theo dõi điểm nóng **qua các chu kỳ phân tích liên tiếp** để xác nhận việc khắc phục thực sự hiệu quả, không chỉ một lần như
  ảnh chụp.

## Tài liệu tham khảo và đọc thêm

- *Your Code as a Crime Scene*, của Adam Tornhill (văn bản nền tảng về phân tích điểm nóng kết hợp mức thay đổi và độ phức tạp từ dữ
  liệu kiểm soát phiên bản).
- *Software Design X-Rays*, của Adam Tornhill (các kỹ thuật tiếp theo cho phân tích hành vi mã dùng lịch sử kiểm soát phiên bản).
- Nagappan, Nachiappan, và Thomas Ball, "Use of Relative Code Churn Measures to Predict System Defect Density," *ICSE* (2005):
  nghiên cứu thực nghiệm về mối quan hệ giữa mức thay đổi mã và mật độ lỗi.
- *Refactoring: Improving the Design of Existing Code*, của Martin Fowler (các kỹ thuật xử lý độ phức tạp ngẫu nhiên khi đã xác
  định được).
