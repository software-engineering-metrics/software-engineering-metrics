# 7.1 Sự chuyển dịch mô hình của AI sinh tạo

## Tổng quan và động lực

Trong phần lớn lịch sử của kỹ thuật phần mềm, viết mã chậm và tốn công đến mức khối lượng đầu ra thô, số dòng đã viết, số commit, số
tính năng đã giao, tương quan ít nhất một cách lỏng lẻo với công sức thật và, không hoàn hảo, với giá trị thật. Tương quan đó chưa bao
giờ hoàn hảo, chủ đề 3.4 dành cả một chủ đề để nói vì sao các chỉ số hoạt động gây hiểu lầm ngay cả trong một thế giới trước AI, nhưng
nó đủ mạnh để nhiều tổ chức xây chương trình chỉ số trên giả định ngầm rằng nhiều mã được tạo ra hơn nói chung có nghĩa là nhiều việc đã
làm hơn. Các trợ lý lập trình [AI sinh tạo](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) đã phá vỡ giả định đó
một cách dứt khoát: một công cụ giờ có thể tạo ra một khối lượng mã lớn, trông hợp lý trong vài giây, với một phần nhỏ chi phí trước đây,
và khối lượng đó riêng nó hầu như không cho bạn biết gì về việc mã kết quả có chạy đúng, có bảo trì được, hay phục vụ bất kỳ mục đích
thật nào không.

Tuyên bố cốt lõi của chủ đề này là đây là một sự chuyển dịch mô hình, không phải một thay đổi công cụ từng bước. Một sự chuyển dịch mô
hình thay đổi điều các công cụ đo hiện có của bạn thực sự đo, không chỉ các giá trị chúng báo cáo. Một đồng hồ tốc độ vẫn đo tốc độ
sau khi bạn đổi động cơ xe; một số chỉ số của cuốn sách này không qua được sự chuyển tiếp này gọn gàng như vậy. Tần suất triển khai
(chủ đề 2.10) có thể tăng vì AI đã đẩy nhanh công việc thực sự giá trị, hoặc vì AI khiến việc tạo ra nhiều thay đổi nhỏ, giá trị thấp
trở nên dễ dàng một cách tầm thường; riêng con số không còn phân biệt được hai điều đó, theo cách mà trước đây nó phần lớn làm được, với
sự thận trọng thích hợp. Cùng logic áp dụng với lực mạnh hơn cho số commit thô, số dòng mã và khối lượng pull request, tất cả đều đã
được chủ đề 3.4 cảnh báo là các chỉ số cá nhân, nay được khuếch đại thành một rủi ro liên quan ở cả cấp đội và tổ chức.

Với các đội lớn, sự chuyển dịch này đến nhanh hơn mức thực hành đo lường của hầu hết các tổ chức có thể thích nghi, và khoảng cách giữa
tốc độ áp dụng và tốc độ thích nghi của đo lường là nơi rủi ro thật của phần này nằm. Các tổ chức doanh nghiệp tiếp tục báo cáo các chỉ
số hoạt động thời trước AI mà không điều chỉnh có nguy cơ ăn mừng một chỉ số đã lặng lẽ thôi tương quan với giá trị; các tổ chức chính
phủ đánh giá đầu tư công cụ AI cần một hiểu biết tỉnh táo về chính xác chỉ số nào còn đáng tin và chỉ số nào không, trước khi cam kết
các quyết định mua sắm hay chính sách xây trên các giả định đo lường lỗi thời.

## Các nguyên tắc chính

- **Đây là một sự chuyển dịch mô hình về điều các chỉ số đo, không phải một thay đổi từng bước.** Một số chỉ số hiện có đã lặng lẽ thôi
  mang ý nghĩa như trước.
- **Khối lượng đầu ra chưa bao giờ là đại diện đáng tin cho giá trị, và giờ nó trở nên không đáng tin một cách chủ động.** Lời cảnh báo
  của chủ đề 3.4 luôn đúng; sự chuyển dịch này khiến việc phớt lờ nó tốn kém hơn nhiều.
- **Khoảng cách giữa tốc độ áp dụng AI và tốc độ thích nghi của đo lường là rủi ro thật.** Các tổ chức áp dụng công cụ nhanh hơn việc họ
  cân nhắc lại các chỉ số.
- **Không phải mọi chỉ số trong cuốn sách này bị ảnh hưởng như nhau.** Các chỉ số kết quả (Phần 5) bền vững hơn nhiều trước sự chuyển
  dịch này so với các chỉ số hoạt động và đầu ra thô.
- **Sự chuyển dịch này diễn ra trên toàn ngành và đang tiếp diễn, không phải một điều chỉnh một lần.** Hãy kỳ vọng thay đổi tiếp tục khi
  công cụ và các mẫu hình áp dụng nó tiếp tục tiến hóa.

## Khuyến nghị

### Kiểm toán tường minh bộ chỉ số hiện có về tính hợp lệ trong kỷ nguyên AI

Hãy đi qua bảng điều khiển hiện tại của bạn và, với mỗi chỉ số, hỏi thẳng: một đội dùng AI hỗ trợ nhiều nhưng không tạo thêm giá trị thật
so với trước có cho thấy một chỉ số được cải thiện ở đây không. Số đếm hoạt động, tần suất commit và tần suất triển khai thô (không có
rào chắn ổn định đi kèm, chủ đề 2.10) là những chỉ số dễ bị ảnh hưởng nhất. Các chỉ số kết quả từ Phần 5, tỷ lệ lỗi lọt, mức áp dụng
tính năng, kết quả kinh doanh, tương đối bền vững, vì chúng đo kết quả thực chứ không phải khối lượng hoạt động đã tạo ra nó.

### Xem xét lại riêng tần suất triển khai và thời gian dẫn, với sự chú ý rào chắn được nâng cao

Chủ đề 2.10 đã cảnh báo về lách bằng thay thế, chia công việc có ý nghĩa thành các lần triển khai tầm thường để thổi phồng số đếm. AI
sinh tạo khiến mẫu hình lách cụ thể này rẻ hơn và dễ tạo ra hơn rất nhiều, thậm chí vô tình, vì các thay đổi tầm thường có AI hỗ trợ giờ
gần như miễn phí để tạo ra. Hãy siết rào chắn tỷ lệ thay đổi thất bại (chủ đề 2.10) tương xứng với mức một đội đã áp dụng phát triển có
AI hỗ trợ nhiều đến đâu, và theo dõi xu hướng kích thước triển khai kỹ hơn trước.

### Coi năng lực đánh giá mã là một nút thắt mới, quan trọng

Nếu sự hỗ trợ của AI làm tăng đáng kể khối lượng mã được đề xuất để đánh giá, giai đoạn đánh giá (chủ đề 2.9), vốn thường đã là nguồn
thời gian chờ lớn nhất trong đường ống phân phối, trở thành một ràng buộc còn sắc hơn. Một người đánh giá được yêu cầu xét một khối
lượng mã do AI tạo ra cao hơn nhiều với cùng tốc độ như trước chắc chắn sẽ hoặc làm chậm đường ống hoặc giảm độ sâu đánh giá, đúng rủi ro
đóng dấu cho qua mà chủ đề 2.9 đã cảnh báo, giờ dưới áp lực lớn hơn đáng kể. Hãy theo dõi độ sâu đánh giá và các rào chắn chất lượng với
sự chú ý nâng cao khi khối lượng mã do AI tạo ra tăng.

### Đừng giả định mã do AI tạo ra có cùng hồ sơ lỗi như mã do người viết

Bằng chứng ban đầu và kinh nghiệm của người thực hành gợi ý mã do AI tạo ra có thể có hồ sơ lỗi khác với mã do người viết: logic trông
hợp lý nhưng sai tinh vi, xử lý trường hợp biên được tạo ra tự tin nhưng không đúng, hoặc mã qua được đánh giá hời hợt vì trông đúng
phong cách và hợp lý, nhưng không thực sự được suy luận với hiểu biết thật về bối cảnh cụ thể của hệ thống. Hãy coi đây là một giả thuyết
đáng kiểm tra chủ động so với dữ liệu lỗi lọt của chính bạn (chủ đề 5.1), gắn thẻ các lỗi theo việc mã gốc có phần lớn do AI tạo ra hay
không, thay vì giả định các mối quan hệ tỷ lệ lỗi lịch sử mà tổ chức của bạn xây các thực hành chất lượng quanh đó vẫn còn nguyên không đổi.

### Cập nhật tường minh hiến chương chỉ số và quy trình quản trị của bạn cho sự chuyển dịch này

Theo kỷ luật quản trị của chủ đề 1.4, đừng để sự chuyển dịch này xảy ra với chương trình chỉ số của bạn một cách thụ động. Hãy xem lại
tường minh hiến chương chỉ số của bạn, gọi tên chỉ số nào cần rào chắn mới, chỉ số nào cần ngừng, và chỉ số nào vẫn đáng tin, như một
quyết định quản trị có chủ đích thay vì một sự trôi dạt không được xem xét. Hãy ghi chép lý do, vì đây chính là loại chuyển dịch định
nghĩa và bối cảnh mà chủ đề 1.4 cảnh báo có thể xảy ra lặng lẽ và chỉ bị phát hiện muộn hơn nhiều.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Tiếp tục báo cáo các chỉ số thời trước AI không đổi | Không gián đoạn, báo cáo quen thuộc | Có nguy cơ ăn mừng các chỉ số đã lặng lẽ thôi tương quan với giá trị |
| Kiểm toán toàn bộ bộ chỉ số và sửa đổi có chủ đích | Khôi phục đo lường đáng tin | Cần công sức phân tích thật và quản lý thay đổi tổ chức |
| Bỏ hoàn toàn các chỉ số hoạt động và đầu ra | Loại bỏ trực tiếp rủi ro dễ bị ảnh hưởng nhất | Mất một số tín hiệu bối cảnh thực sự hữu ích (lưu ý của chủ đề 3.4) |
| Siết rào chắn mà không kiểm toán toàn bộ | Nhanh hơn để triển khai | Có thể bỏ sót các chỉ số có mức phơi nhiễm kém hiển nhiên hơn các trường hợp rõ nhất |

Sự căng thẳng trung tâm là **tính liên tục của đo lường so với tính hợp lệ của đo lường**. Các tổ chức dễ hiểu là thích tiếp tục báo cáo
các chỉ số quen thuộc theo cách quen thuộc, vì thay đổi một chương trình chỉ số có chi phí và gián đoạn tổ chức thật. Nhưng tiếp tục báo
cáo một chỉ số đã lặng lẽ thôi đo điều nó từng đo còn tệ hơn gián đoạn, đó là đánh lạc hướng chủ động. Hãy giải quyết sự căng thẳng bằng
cách coi đây chính là loại thay đổi quản trị có chủ đích, được ghi chép mà chủ đề 1.4 mô tả, gây gián đoạn trong ngắn hạn nhưng cần thiết
để giữ các chỉ số của tổ chức trung thực.

## Câu hỏi để thảo luận với đội của bạn

1. **Với mỗi chỉ số trên bảng điều khiển của chúng ta, một đội dùng AI hỗ trợ nhiều nhưng không tạo thêm giá trị thật có cho thấy một
   chỉ số được cải thiện không?** Hãy đi qua các chỉ số của bạn một cách tường minh với phép thử này; những chỉ số không qua được là ứng
   viên ưu tiên cao nhất để sửa rào chắn hoặc ngừng.

2. **Tần suất triển khai hay khối lượng commit của chúng ta có tăng kể từ khi áp dụng trợ lý lập trình AI không, và chúng ta đã kiểm tra
   xem tỷ lệ thay đổi thất bại hay tỷ lệ lỗi có dịch chuyển tương ứng không?** Hãy lấy dữ liệu ghép đôi thực tế thay vì giả định kết
   quả tích cực hay tiêu cực.

3. **Năng lực đánh giá mã của chúng ta có theo kịp mọi mức tăng khối lượng mã có AI hỗ trợ không, hay độ sâu đánh giá đang lặng lẽ xói
   mòn dưới áp lực tăng?** Hãy kiểm tra riêng các chỉ số giai đoạn đánh giá (chủ đề 2.9) để tìm dấu hiệu rủi ro đóng dấu cho qua đang
   tăng.

4. **Chúng ta có gắn thẻ các lỗi theo việc mã gốc có phần lớn do AI tạo ra không, và nếu có, dữ liệu đó cho thấy gì cho đến nay?** Nếu
   hiện bạn chưa gắn thẻ điều này, hãy thảo luận cần gì để bắt đầu, vì dữ liệu này liên quan trực tiếp đến việc các giả định chất lượng
   lịch sử của bạn còn đúng không.

5. **Chúng ta đã xem xét lại có chủ đích hiến chương chỉ số của mình (chủ đề 1.4) trước sự chuyển dịch này chưa, hay thực hành đo lường
   của chúng ta đơn giản tiếp tục không đổi?** Nếu câu trả lời thành thật là vế sau, khoảng trống đó chính là điều chủ đề này khuyến nghị
   đóng trước tiên.

6. **Tổ chức của chúng ta bị bắt thế chân trước sự chuyển dịch này, ăn mừng một chỉ số đã thôi mang ý nghĩa như chúng ta nghĩ, sẽ trông
   như thế nào?** Thí nghiệm tư duy cụ thể, hơi khó chịu này giúp thúc đẩy cuộc kiểm toán mà chủ đề này khuyến nghị trước, thay vì sau
   khi kịch bản đó thực sự xảy ra.

## Góc nhìn theo lĩnh vực

**Khởi nghiệp.** Việc áp dụng nhanh công cụ AI là phổ biến và thường là lợi thế cạnh tranh thật, nhưng chính tốc độ khiến việc áp dụng
hấp dẫn cũng khiến sự trôi dạt chỉ số không được xem xét dễ xảy ra hơn. Hãy xây thói quen kiểm tra các chỉ số kết quả (Phần 5) cùng với
bất kỳ lợi ích hiệu quả nào bạn báo cáo từ việc áp dụng AI, thay vì chỉ báo cáo cải thiện tốc độ.

**Doanh nghiệp nhỏ.** Sự hỗ trợ lập trình của AI có thể mở rộng đáng kể năng lực của một đội nhỏ, nhưng hãy cưỡng lại cám dỗ báo cáo mức
tăng đầu ra thô như thành công không mơ hồ mà không kiểm tra các rào chắn chất lượng; một đội nhỏ có ít năng lực hơn để hấp thụ một vấn
đề chất lượng không được phát hiện so với một tổ chức lớn hơn có nhiều dự phòng hơn.

**Doanh nghiệp lớn.** Quy mô của rủi ro này tích lũy đáng kể ở đây, vì việc áp dụng AI trên hàng chục hay hàng trăm đội cùng lúc có thể
dịch chuyển tính hợp lệ của chỉ số trên toàn tổ chức trước khi bất kỳ đội đơn lẻ nào nhận ra mẫu hình tại chỗ. Hãy tiến hành cuộc kiểm
toán bộ chỉ số mà chủ đề này khuyến nghị ở cấp tổ chức, không chỉ từng đội, và cập nhật quản trị (chủ đề 1.4) một cách tập trung và
tường minh.

**Chính phủ.** Các tổ chức khu vực công thường áp dụng công nghệ mới thận trọng hơn, nhưng các chỉ số và chuẩn dùng để đánh giá các chương
trình công nghệ chính phủ thường được lấy từ hoặc so sánh với dữ liệu ngành khu vực tư vốn chính nó đang dịch chuyển dưới cùng áp lực.
Hãy hiểu tường minh những chuẩn ngành nào bạn so sánh đã bị ảnh hưởng bởi sự chuyển dịch này trước khi dùng chúng để đặt kỳ vọng hay đánh
giá hiệu suất.

## Ví dụ

**Doanh nghiệp lớn.** Ban lãnh đạo kỹ thuật của một công ty công nghệ tài chính nhận thấy tần suất triển khai đã tăng gần 40% trong hai
quý sau khi áp dụng rộng rãi trợ lý lập trình AI, và ban đầu báo cáo điều này như một thắng lợi năng suất thẳng thắn trong một bài trình
bày với hội đồng quản trị. Một phân tích tiếp theo cẩn thận hơn, được thúc đẩy bởi câu hỏi của một thành viên hội đồng hoài nghi về việc
chất lượng đã được kiểm tra chưa, phát hiện tỷ lệ thay đổi thất bại đã tăng gần như song hành với tần suất triển khai, hoàn toàn bù trừ
mức tăng bề ngoài khi chỉ số ổn định ghép đôi thực sự được xem xét. Cách báo cáo sửa đổi của công ty giờ trình bày tần suất triển khai và
tỷ lệ thay đổi thất bại cùng nhau một cách tường minh bất cứ khi nào đưa ra tuyên bố năng suất có AI hỗ trợ, tránh được tuyên bố gây hiểu
lầm trước đó, suýt được công khai.

**Chính phủ.** Một bộ phận CNTT chính quyền tiểu bang thí điểm trợ lý lập trình AI cho một nhóm con các đội kỹ thuật phát hiện đầu ra mã
thô trên mỗi kỹ sư đã tăng đáng kể, một con số ban đầu được nêu một cách thuận lợi trong một cuộc rà soát thí điểm nội bộ. Một phân tích
kỹ hơn, được thúc đẩy bởi việc hướng dẫn của cuốn sách này được đưa vào khung đánh giá của bộ phận, đã xem xét riêng tỷ lệ lỗi lọt của
công việc có AI hỗ trợ so với không có AI hỗ trợ và thấy một tỷ lệ lỗi tăng nhẹ ở nhóm có AI hỗ trợ, tập trung ở xử lý trường hợp biên
cho các hoàn cảnh bất thường của công dân mà công cụ AI chưa từng được tiếp xúc trong quá trình huấn luyện. Phát hiện này không dừng thí
điểm nhưng dẫn đến một sự tăng cường độ nghiêm ngặt đánh giá có mục tiêu, cụ thể cho các thay đổi có AI hỗ trợ chạm vào logic trường hợp
biên về điều kiện hưởng, xử lý rủi ro thật mà riêng chỉ số đầu ra thô sẽ không bao giờ làm lộ ra.

## Cơ sở kinh doanh: động lực, ROI và TCO

Lợi tức của việc tiến hành cuộc kiểm toán này một cách chủ động là tránh được sự bối rối công khai hay trước hội đồng quản trị vì báo cáo
một chỉ số hóa ra, dưới sự soi xét, không đo gì thật, đúng kịch bản mà ví dụ công nghệ tài chính ở trên suýt tạo ra. Một tổ chức đi trước
sự chuyển dịch này giữ được uy tín với các bên liên quan; một tổ chức bị bắt quả tang báo cáo một chỉ số rỗng trả một cái giá danh tiếng
thật, và phần lớn tránh được.

Tổng chi phí sở hữu là công sức phân tích để kiểm toán bộ chỉ số hiện có, siết rào chắn và cập nhật tài liệu quản trị, một khoản đầu tư
vừa phải, một lần so với rủi ro liên tục của việc tiếp tục báo cáo các chỉ số đã lặng lẽ thôi đo điều chúng tuyên bố đo. Chi phí này cũng
lặp lại ở mức thấp hơn, vì sự chuyển dịch này đang tiếp diễn, không phải một sự kiện một lần, và việc kiểm toán lại định kỳ khi công cụ
và mẫu hình áp dụng tiếp tục tiến hóa là một bổ sung hợp lý, lâu dài cho nhịp quản trị chỉ số.

## Phản mẫu và cạm bẫy

- **Tiếp tục báo cáo các chỉ số hoạt động thời trước AI không đổi và thiếu phê phán:** có nguy cơ ăn mừng một chỉ số đã lặng lẽ thôi
  tương quan với giá trị thật.
- **Báo cáo tăng tần suất triển khai hay khối lượng đầu ra mà không có rào chắn ổn định đi kèm:** lặp lại lời cảnh báo của chủ đề 2.10
  với mức cược cao hơn đáng kể dưới phát triển có AI hỗ trợ.
- **Giả định mã do AI tạo ra có cùng hồ sơ lỗi như mã do người viết mà không kiểm tra:** một giả định chưa được kiểm chứng có thể sai
  một cách chủ động.
- **Để độ sâu đánh giá xói mòn lặng lẽ dưới khối lượng mã do AI tạo ra tăng:** rủi ro đóng dấu cho qua từ chủ đề 2.9, được tăng cường.
- **Coi sự chuyển dịch này là một điều chỉnh một lần thay vì một mối quan tâm liên tục:** công cụ và các mẫu hình áp dụng nó tiếp tục
  tiến hóa, và thực hành đo lường cần theo kịp.
- **So sánh với chuẩn ngành mà không hiểu liệu những chuẩn đó có tự dịch chuyển dưới cùng áp lực không:** có nguy cơ tạo cảm giác sai về
  hiệu suất tương đối.

## Mô hình trưởng thành

- **Cấp 1, Khởi tạo:** Các chỉ số thời trước AI được báo cáo không đổi, không nhận thức rằng việc áp dụng AI có thể đã ảnh hưởng tính hợp
  lệ của chúng.
- **Cấp 2, Phát triển:** Có một số nhận thức về sự chuyển dịch, nhưng chưa tiến hành kiểm toán có hệ thống bộ chỉ số hiện có.
- **Cấp 3, Chuẩn hóa:** Một cuộc kiểm toán toàn bộ bộ chỉ số đã được tiến hành, với rào chắn được siết và các chỉ số được ghi chép là bị
  ảnh hưởng hay bền vững, trên toàn tổ chức.
- **Cấp 4, Quản lý:** Các lỗi và kết quả chất lượng được gắn thẻ và theo dõi tích cực theo mức hỗ trợ của AI để kiểm tra, không giả
  định, rằng các mối quan hệ chất lượng lịch sử của tổ chức vẫn đúng.
- **Cấp 5, Điều phối:** Tổ chức có thực hành trưởng thành, liên tục xem xét lại các chỉ số của mình khi công cụ AI và mẫu hình áp dụng
  tiếp tục tiến hóa, và có thể chỉ ra các quyết định quản trị cụ thể được đưa ra một cách chủ động để đáp lại sự chuyển dịch này thay vì
  phản ứng sau khi có vấn đề nổi lên.

## Ý tưởng để thảo luận

1. Chỉ số hiện tại nào của chúng ta sẽ tâng bốc nhất một đội dùng AI hỗ trợ nhiều nhưng không tạo thêm giá trị thật?
2. Tần suất triển khai của chúng ta có tăng kể từ khi áp dụng AI không, và tỷ lệ thay đổi thất bại có dịch chuyển theo không?
3. Chúng ta có gắn thẻ kết quả chất lượng theo mức hỗ trợ của AI không, và dữ liệu đó sẽ cho thấy gì?
4. Năng lực đánh giá của chúng ta có theo kịp mọi mức tăng khối lượng mã do AI tạo ra không?
5. Chúng ta hiện so sánh với chuẩn ngành nào, và bản thân nó có dịch chuyển dưới áp lực này không?

## Những điểm chính cần nhớ

- AI sinh tạo là một **sự chuyển dịch mô hình về điều một số chỉ số hiện có đo**, không phải một thay đổi công cụ từng bước; một số chỉ
  số đã lặng lẽ thôi mang ý nghĩa như trước.
- **Các chỉ số hoạt động và đầu ra thô dễ bị ảnh hưởng nhất**; các chỉ số kết quả (Phần 5) tương đối bền vững.
- **Hãy siết rào chắn, đặc biệt là tỷ lệ thay đổi thất bại**, tương xứng với mức áp dụng phát triển có AI hỗ trợ.
- **Hãy kiểm tra, đừng giả định, liệu mã do AI tạo ra có hồ sơ lỗi khác** với mã do người viết, dùng dữ liệu lỗi lọt được gắn thẻ.
- Hãy coi đây là **mối quan tâm quản trị liên tục, không phải một lần** (chủ đề 1.4), vì công cụ và các mẫu hình áp dụng nó tiếp tục
  tiến hóa.

## Tài liệu tham khảo và đọc thêm

- *Accelerate: The Science of Lean Software and DevOps*, của Nicole Forsgren, Jez Humble, và Gene Kim (nền tảng đo lường dựa trên kết
  quả mà chủ đề này lập luận trở nên quan trọng hơn, không kém đi, dưới sự chuyển dịch này).
- Nghiên cứu của GitHub về lập trình cặp với AI và năng suất lập trình viên (nghiên cứu ngành về các tác động đo được của phát triển có
  AI hỗ trợ).
- Chương trình Nghiên cứu và Đánh giá DevOps của Google Cloud, [dora.dev](https://dora.dev/) (nghiên cứu State of DevOps liên tục, những
  năm gần đây đưa vào các phát hiện về áp dụng AI).
- *The Tyranny of Metrics*, của Jerry Z. Muller (lập luận chung cho sự hoài nghi với các chỉ số dựa trên khối lượng, liên quan trực tiếp
  khi khối lượng đầu ra trở nên rẻ).
