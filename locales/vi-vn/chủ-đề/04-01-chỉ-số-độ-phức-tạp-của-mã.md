# 4.1 Chỉ số độ phức tạp của mã

## Tổng quan và động lực

**[Độ phức tạp chu trình (cyclomatic complexity)](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**, do Thomas J. McCabe giới
thiệu năm 1976, đếm số đường độc lập đi qua luồng điều khiển của một đoạn mã: mỗi `if`, vòng lặp và nhánh đều cộng thêm vào số
đếm. Nó vẫn là chỉ số độ phức tạp mã được dùng rộng rãi nhất gần năm mươi năm sau, cùng các họ hàng như độ phức tạp nhận thức (gia
quyền luồng điều khiển lồng nhau và khó theo dõi nặng hơn số đếm tuyến tính gốc của McCabe) và độ sâu lồng. Các chỉ số này chia sẻ một
hiểu biết thật, đã được kiểm chứng: mã có nhiều đường độc lập đi qua hơn thì khó kiểm thử đầy đủ hơn, khó suy luận hơn, và, qua hàng
thập kỷ nghiên cứu thực nghiệm, đo được là dễ chứa lỗi hơn.

Chủ đề này đối xử với hiểu biết đó bằng sự tôn trọng thật trong khi cũng đối xử với giới hạn của nó nghiêm túc không kém. Các chỉ số độ
phức tạp đo một thuộc tính cụ thể của mã, và một cơ sở mã có thể đơn giản theo mọi chỉ số độ phức tạp trong khi vẫn thiết kế tồi, đặt
tên tệ, hay không mạch lạc về mặt khái niệm theo những cách mà không thuật toán đếm nhánh nào phát hiện được. Ngược lại, một số vấn đề
phức tạp không thể giản lược thực sự đòi hỏi mã phức tạp để giải đúng, và một đội chịu áp lực giảm thiểu điểm phức tạp có thể tạo ra
mã điểm tốt trong khi thực ra khó hiểu hơn, rải độ phức tạp thiết yếu qua nhiều tệp và tầng gián tiếp hơn thay vì giảm nó.

Với các đội lớn, chỉ số độ phức tạp phát huy giá trị như một công cụ phân loại: một cách để tìm, trong hàng nghìn tệp, tập con nhỏ nhất
đáng được xem kỹ hơn, không phải như một phán quyết đứng riêng về chất lượng mã. Các tổ chức doanh nghiệp và chính phủ duy trì những cơ
sở mã quá lớn để bất kỳ cá nhân nào đọc hết dựa vào chức năng phân loại này để hướng công sức tái cấu trúc và đánh giá khan hiếm đến
nơi sẽ đem lại nhiều lợi ích nhất.

## Các nguyên tắc chính

- **Chỉ số độ phức tạp dự đoán độ khó kiểm thử và lỗi; chúng không đo chất lượng trực tiếp.** Hãy coi chúng là một đầu vào, không phải
  một phán quyết.
- **Một điểm độ phức tạp chịu rủi ro bị lách qua che giấu, không chỉ đơn giản hóa thật.** Rải độ phức tạp qua nhiều tệp có thể hạ điểm
  mà không thực sự làm mã dễ hiểu hơn.
- **Một số độ phức tạp là thiết yếu, không phải ngẫu nhiên.** Một vấn đề thực sự khó có thể đòi hỏi mã thực sự phức tạp; mục tiêu là
  giảm thiểu độ phức tạp ngẫu nhiên, không loại bỏ mọi độ phức tạp bừa bãi.
- **Dùng chỉ số độ phức tạp để phân loại, không phải làm bảng điểm cá nhân hay đội.** Chúng chỉ ra nơi cần nhìn, không chỉ ra ai để
  đổ lỗi.
- **Xu hướng và ngoại lệ quan trọng hơn bất kỳ ngưỡng tuyệt đối nào.** Một xu hướng tăng hay một ngoại lệ cực đoan hành động được hơn
  một giá trị trung bình toàn đội đơn lẻ.

## Khuyến nghị

### Dùng chỉ số độ phức tạp để phân loại công sức đánh giá và tái cấu trúc

Hãy chạy phân tích độ phức tạp trên toàn cơ sở mã và dùng kết quả để ưu tiên nơi một lần đánh giá kỹ bởi con người hay một khoản
đầu tư tái cấu trúc sẽ hiệu quả nhất: các hàm hay tệp có điểm vượt xa khoảng điển hình của chính cơ sở mã là nơi giá trị nhất để nhìn
trước. Cách dùng phân loại này, tìm nơi cần nhìn, là ứng dụng bảo vệ được và có giá trị nhất của chỉ số độ phức tạp, hơn nhiều so với
dùng chúng như một cổng đạt/không đạt tuyệt đối.

### Đặt ngưỡng tương đối với cơ sở mã của chính bạn, không phải một con số phổ quát

Các ngưỡng độ phức tạp tuyệt đối vay mượn thiếu suy xét từ quy ước ngành (điểm độ phức tạp mười là một quy tắc ngón tay cái thường
được trích dẫn) có thể quá lỏng hoặc quá chặt tùy lĩnh vực của bạn: một bộ phân tích cú pháp hay một công cụ luật có thể có độ phức
tạp cơ sở cao hơn chính đáng so với một dịch vụ CRUD điển hình. Hãy hiệu chỉnh ngưỡng của riêng bạn theo phân phối thực của cơ sở mã,
và coi việc vi phạm ngưỡng là lời nhắc để nhìn kỹ hơn, không phải một thất bại build tự động, trừ khi đội của bạn đã chủ ý chọn chính
sách chặt hơn đó với nhận thức đầy đủ về các đánh đổi.

### Cảnh giác với việc lách qua phân rã mà không đơn giản hóa thật

Cách phổ biến nhất khiến điểm độ phức tạp bị lách là kiểu thay thế của chủ đề 1.2 áp dụng cho chỉ số cụ thể này: tách một hàm thực sự
phức tạp thành vài hàm nhỏ hơn mỗi hàm riêng lẻ có điểm tốt, trong khi toàn hệ thống vẫn khó hiểu như cũ, hoặc đôi khi khó hơn, vì
logic giờ rải qua nhiều tệp hơn với nhiều gián tiếp hơn giữa chúng. Hãy ghép chỉ số độ phức tạp với một đánh giá định tính xem phân rã
có thực sự làm mã sáng hơn không, hay chỉ chuyển độ phức tạp đến nơi chỉ số không còn thấy được.

### Phân biệt độ phức tạp thiết yếu với độ phức tạp ngẫu nhiên trước khi phản ứng

Trước khi coi một điểm độ phức tạp cao là vấn đề cần sửa, hãy hỏi liệu vấn đề nền tảng có thực sự đòi hỏi ngần ấy đường độc lập
không, logic tính thuế chẳng hạn chính đáng có nhiều nhánh, hay độ phức tạp đến từ các nguyên nhân tránh được: các điều kiện lồng sâu
có thể làm phẳng, logic trùng lặp có thể hợp nhất, hoặc ranh giới trách nhiệm không rõ có thể vẽ lại. Chỉ loại thứ hai là một vấn đề
chất lượng thật mà chỉ số này nên thúc bạn sửa.

### Theo dõi xu hướng và ngoại lệ, không chỉ giá trị trung bình ảnh chụp

Điểm độ phức tạp trung bình toàn cơ sở mã dịch chuyển nhẹ hiếm khi hành động được tự nó; độ phức tạp của một tệp cụ thể tăng mạnh qua
nhiều thay đổi, hay một số ít ngoại lệ cực đoan trong một cơ sở mã vốn hành xử tốt, là các tín hiệu hữu ích hơn nhiều. Hãy theo dõi cả
xu hướng theo thời gian và cái đuôi ngoại lệ, và dùng chúng để kích hoạt một cuộc điều tra cụ thể, có mục tiêu thay vì một sáng kiến giảm
độ phức tạp rộng, thiếu tập trung.

## Đánh đổi: ưu và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Ngưỡng phổ quát tuyệt đối | Đơn giản, nhất quán, dễ tự động hóa | Bỏ qua sự khác biệt lĩnh vực chính đáng; có thể bị lách bằng phân rã |
| Ngưỡng tương đối với cơ sở mã | Hiệu chỉnh tốt hơn theo bối cảnh thực | Cần thiết lập nhiều hơn và hiệu chỉnh lại định kỳ |
| Độ phức tạp làm cổng build tự động | Thực thi tính nhất quán mà không tốn chi phí đánh giá của con người | Có thể chặn mã phức tạp nhưng thiết kế tốt chính đáng, hoặc thưởng cho phân rã che giấu |
| Độ phức tạp làm tín hiệu phân loại cho đánh giá của con người | Bắt được các vấn đề chất lượng thật mà riêng phân rã sẽ bỏ sót | Cần nhiều thời gian đánh giá của con người hơn một cổng hoàn toàn tự động |

Mâu thuẫn trung tâm là **tự động hóa so với phán đoán**. Một cổng độ phức tạp hoàn toàn tự động rẻ để thực thi và nhất quán, nhưng nó có
thể vừa chặn mã phức tạp chính đáng, thiết kế tốt vừa thưởng cho phân rã hời hợt lách điểm mà không thực sự đơn giản hóa gì. Hãy giải
quyết bằng cách dùng phân tích độ phức tạp tự động để đưa ra các ứng viên cho đánh giá, và dành phán đoán thực sự, độ phức tạp này là
thiết yếu hay ngẫu nhiên, lần tái cấu trúc này thực sự làm rõ hay chỉ dời độ phức tạp, cho người đánh giá thay vì chỉ một cổng tự động
cứng.

## Câu hỏi để thảo luận với đội của bạn

1. **Ngưỡng độ phức tạp của chúng ta được hiệu chỉnh theo phân phối thực của cơ sở mã, hay vay mượn thiếu suy xét từ một quy ước ngành
   chung?** Hãy lấy phân phối độ phức tạp thực của cơ sở mã và kiểm tra xem các ngưỡng hiện tại có hợp lý so với nó không, thay vì cho
   rằng một con số thường được trích dẫn áp dụng phổ quát cho lĩnh vực của bạn.

2. **Chúng ta đã bao giờ thấy một hàm bị tách thành vài hàm nhỏ hơn mà mã kết quả không thực sự dễ hiểu hơn không?** Đây là dấu hiệu rõ
   nhất của kiểu lách phân rã mà chủ đề này cảnh báo. Hãy xem một lần tái cấu trúc gần đây chủ yếu do điểm độ phức tạp thúc đẩy và đánh giá
   trung thực xem nó có thực sự cải thiện khả năng dễ hiểu không.

3. **Ở đâu trong cơ sở mã của chúng ta độ phức tạp là thiết yếu với vấn đề, và ở đâu nó là ngẫu nhiên và sửa được?** Hãy đi qua các ngoại lệ
   phức tạp cao nhất và phân chúng tường minh vào hai loại này, vì chỉ loại thứ hai đại diện cho một vấn đề chất lượng thật, hành động
   được.

4. **Chúng ta dùng chỉ số độ phức tạp để phân loại công sức đánh giá, hay như một cổng tự động cứng không có phán đoán của con người?** Hãy
   bàn xem cách thực thi hiện tại của bạn có để chỗ cho sự phân biệt thiết yếu-so-với-ngẫu nhiên mà chủ đề này khuyến nghị không, hay nó
   đối xử với mọi vi phạm như nhau bất kể bối cảnh.

5. **Một điểm độ phức tạp đã bao giờ được dùng, dù không chính thức, để đánh giá chất lượng công việc của một kỹ sư cá nhân không?** Điều
   này mạo hiểm với cùng cái bẫy đánh giá cá nhân mà chủ đề 3.4 cảnh báo cho chỉ số hoạt động, ở đây áp dụng cho chỉ số mã, và nó mời gọi
   cùng phản ứng lách.

6. **Xu hướng độ phức tạp của chúng ta trong năm qua trông thế nào với các tệp quan trọng nhất, thay đổi thường xuyên nhất?** Hãy kết hợp
   điều này với phân tích biến động và điểm nóng từ chủ đề 4.3, vì một tệp vừa phức tạp cao vừa thay đổi thường xuyên xứng đáng được chú ý
   sớm hơn nhiều so với một tệp phức tạp nhưng hiếm khi bị đụng tới.

## Góc nhìn theo quy mô

**Khởi nghiệp.** Chỉ số độ phức tạp thường ít cấp bách hơn ở quy mô này; cơ sở mã đủ nhỏ để sự quen thuộc không chính thức thường thay cho
đo lường chính thức. Thói quen đáng áp dụng sớm đơn giản là thỉnh thoảng chạy một lần quét độ phức tạp để bắt một tệp cụ thể đang lặng lẽ
trở nên không quản lý nổi trước khi đội lớn quá cỡ mà không nhận ra không chính thức.

**Doanh nghiệp nhỏ.** Phần lớn các công cụ phân tích tĩnh hiện đại báo cáo chỉ số độ phức tạp như một phần của một bộ lint rộng hơn, miễn
phí hoặc chi phí thấp; hãy dùng kết quả như một tín hiệu phân loại định kỳ thay vì đầu tư vào công cụ chuyên dụng. Hãy tập trung chú ý
vào các tệp được sửa đổi thường xuyên nhất trước.

**Doanh nghiệp lớn.** Chỉ số độ phức tạp ở quy mô lớn có giá trị nhất khi kết hợp với dữ liệu biến động mã (chủ đề 4.3) để ưu tiên đầu tư
tái cấu trúc trên một cơ sở mã quá lớn để bất kỳ cá nhân nào khảo sát thủ công. Hãy hiệu chỉnh ngưỡng theo từng dịch vụ hay lĩnh vực thay
vì áp dụng một con số toàn tổ chức, vì độ phức tạp chính đáng biến thiên đáng kể giữa các loại hệ thống khác nhau.

**Chính phủ.** Các hệ thống chính phủ sống lâu thường tích tụ độ phức tạp dần dần qua nhiều năm hay thập kỷ thay đổi yêu cầu tăng dần, và
một cuộc kiểm toán độ phức tạp có thể là công cụ cụ thể, thuyết phục để biện minh đầu tư hiện đại hóa hay tái cấu trúc với các bên liên
quan có thể coi hệ thống chỉ là "đang chạy" và do đó không đáng đầu tư.

## Ví dụ

**Doanh nghiệp lớn.** Một công ty xử lý thanh toán chạy kiểm toán độ phức tạp toàn cơ sở mã lần đầu tiên và thấy một hàm xác thực giao dịch
duy nhất có điểm độ phức tạp chu trình gấp hơn mười lần trung vị của cơ sở mã. Điều tra thấy độ phức tạp gần như hoàn toàn là ngẫu nhiên:
nhiều năm xử lý trường hợp đặc biệt thêm dần cho các nhà cung cấp thanh toán cụ thể đã tích tụ thành các điều kiện lồng sâu có thể tái cấu
trúc thành một mẫu chiến lược sạch hơn tách logic riêng của từng nhà cung cấp. Lần tái cấu trúc, được ưu tiên trực tiếp vì cuộc kiểm toán
độ phức tạp xác định nó là mục tiêu giá trị nhất trong cơ sở mã, giảm điểm độ phức tạp của hàm hơn 80% và, quan trọng hơn, giảm đo được
tỷ lệ lỗi ở đường mã cụ thể đó trong hai quý sau.

**Chính phủ.** Công cụ tính phúc lợi hàng chục năm tuổi của một cơ quan thuế có điểm cực cao về chỉ số độ phức tạp ở gần như mọi hàm, thúc
đẩy giả định ban đầu rằng cả hệ thống cần viết lại từ gốc. Một đợt rà soát kỹ hơn từng hàm một, phân biệt độ phức tạp thiết yếu với ngẫu
nhiên, thấy phần lớn độ phức tạp thực sự phản ánh các quy tắc pháp lý nền tảng, vốn thực sự có ngần ấy nhánh và trường hợp đặc biệt chính
đáng do luật định, trong khi một tập con nhỏ hơn đến từ sự trùng lặp tránh được qua các đường tính toán tương tự. Đội chỉ nhắm vào tập con
độ phức tạp ngẫu nhiên để tái cấu trúc, tránh một lần viết lại toàn bộ tốn kém, rủi ro trong khi vẫn cải thiện có ý nghĩa các khu vực thực
sự có vấn đề nhất của hệ thống.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lợi tức của việc dùng chỉ số độ phức tạp tốt là đầu tư tái cấu trúc có mục tiêu, giá trị cao: ví dụ công ty thanh toán ở trên cho thấy một
cách sửa đơn lẻ, nhắm đúng mục tiêu, được xác định qua phân tích độ phức tạp, đã giảm đo được lỗi ở đúng đường mã rủi ro cao nhất, với một
phần nhỏ chi phí mà một sáng kiến tái cấu trúc rộng, thiếu mục tiêu sẽ đòi hỏi.

Tổng chi phí sở hữu thấp: phần lớn các chuỗi công cụ phát triển hiện đại tính chỉ số độ phức tạp tự động như một phần của phân tích tĩnh
(chủ đề 4.4), và khoản đầu tư thật là thời gian phán đoán của con người để diễn giải kết quả đúng, phân biệt độ phức tạp thiết yếu với ngẫu
nhiên và bắt lách phân rã, hơn là bất kỳ chi phí công cụ mới đáng kể nào.

## Phản mẫu và cạm bẫy

- **Coi điểm độ phức tạp là phán quyết chất lượng trực tiếp:** nó đo một thuộc tính cụ thể, không phải chất lượng mã tổng thể.
- **Tách một hàm để lách điểm mà không đơn giản hóa thật:** kiểu lách phân rã mà chủ đề này gọi tên cụ thể.
- **Áp dụng ngưỡng phổ quát mà không hiệu chỉnh theo cơ sở mã của chính bạn:** tạo ra việc thực thi hoặc quá lỏng hoặc quá chặt tùy lĩnh
  vực.
- **Dùng chỉ số độ phức tạp để đánh giá riêng từng kỹ sư:** mời gọi việc lách và áp dụng sai một chỉ số vốn dành cho phân loại, không phải
  phán xét.
- **Coi mọi độ phức tạp đều sửa được như nhau:** độ phức tạp thiết yếu từ một vấn đề thực sự khó không phải là một khuyết điểm cần loại bỏ.
- **Bỏ qua xu hướng và ngoại lệ để ưu tiên giá trị trung bình phẳng toàn cơ sở mã:** bỏ sót tín hiệu hành động được nhất mà họ chỉ số này
  cung cấp.

## Mô hình trưởng thành

- **Mức 1, Khởi đầu:** Độ phức tạp không được đo, hoặc được đo với một ngưỡng phổ quát chưa được xem xét, áp dụng thiếu suy xét.
- **Mức 2, Phát triển:** Chỉ số độ phức tạp được thu thập nhưng hiếm khi được hành động theo, và không có sự phân biệt giữa độ phức tạp thiết
  yếu và ngẫu nhiên.
- **Mức 3, Chuẩn hóa:** Ngưỡng được hiệu chỉnh theo phân phối của chính cơ sở mã, và chỉ số độ phức tạp nhất quán thúc đẩy việc phân loại
  đánh giá và tái cấu trúc trên toàn tổ chức.
- **Mức 4, Quản lý:** Xu hướng và ngoại lệ độ phức tạp được giám sát chủ động và kết hợp với dữ liệu biến động mã (chủ đề 4.3) để ưu tiên đầu
  tư tái cấu trúc; việc lách phân rã được cảnh giác chủ động.
- **Mức 5, Điều phối:** Tổ chức có thể chỉ ra các cải thiện tỷ lệ lỗi cụ thể, đo được truy ngược trực tiếp về đầu tư tái cấu trúc dựa trên
  độ phức tạp, và dữ liệu độ phức tạp là một đầu vào thường lệ, đáng tin cho các quyết định đầu tư kỹ thuật.

## Ý tưởng để thảo luận

1. Hàm hay tệp phức tạp nhất của chúng ta là gì, và độ phức tạp của nó là thiết yếu hay ngẫu nhiên?
2. Chúng ta đã bao giờ lách một điểm độ phức tạp qua phân rã mà không đơn giản hóa thật chưa?
3. Ngưỡng của chúng ta được hiệu chỉnh theo cơ sở mã của chính mình, hay vay mượn thiếu suy xét?
4. Hiện ở đâu độ phức tạp cao trùng với biến động mã cao trong cơ sở mã của chúng ta?
5. Dữ liệu độ phức tạp đã bao giờ thông tin cho một quyết định đầu tư tái cấu trúc, hay nó nằm không dùng?

## Điểm chính cần nhớ

- Các chỉ số độ phức tạp như **độ phức tạp chu trình** dự đoán độ khó kiểm thử và lỗi; chúng không đo chất lượng mã tổng thể trực tiếp.
- Hãy phân biệt **độ phức tạp thiết yếu** (từ một vấn đề thực sự khó) với **độ phức tạp ngẫu nhiên** (tránh được nhờ thiết kế tốt hơn)
  trước khi phản ứng với một điểm cao.
- Cảnh giác với **lách phân rã**: tách mã để hạ điểm mà không thực sự đơn giản hóa gì.
- Dùng chỉ số độ phức tạp để **phân loại**, hướng công sức đánh giá của con người và tái cấu trúc, không phải làm bảng điểm cá nhân hay
  cổng tự động cứng nhắc.
- Hiệu chỉnh ngưỡng theo **phân phối của chính cơ sở mã bạn**, và theo dõi **xu hướng và ngoại lệ**, không chỉ giá trị trung bình phẳng.

## Tài liệu tham khảo và đọc thêm

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on Software Engineering* (1976): bài báo gốc về độ phức tạp chu trình.
- *Code Complete*, của Steve McConnell (hướng dẫn thực tế về quản lý độ phức tạp trong xây dựng phần mềm).
- *Working Effectively with Legacy Code*, của Michael Feathers (các kỹ thuật giảm độ phức tạp an toàn trong mã hiện có, khó thay đổi).
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring Understandability" (SonarSource, 2018): chỉ số độ phức tạp nhận thức và
  sự phân biệt của nó với độ phức tạp chu trình.
