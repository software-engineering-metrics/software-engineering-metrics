# 2.0 Giới thiệu Phần 2: Chỉ số luồng

Nếu Phần 1 là triết lý của đo lường, thì Phần 2 là nơi triết lý đó gặp chính việc
phân phối: các chỉ số mô tả không chỉ một đội đưa mã từ ý tưởng đến hệ thống đang chạy
nhanh và an toàn đến đâu, mà còn loại giá trị nào đang chảy qua đường ống đó. Phần này
được tổ chức quanh **Flow Framework**, một mô hình do Mik Kersten tạo ra trong cuốn
sách năm 2018 *Project to Product*, coi việc phân phối phần mềm là một chuỗi giá trị và
cho chuỗi giá trị đó một bộ từ vựng chung: bốn loại mục luồng và năm chỉ số luồng nối
hoạt động kỹ thuật với chiến lược kinh doanh theo những thuật ngữ mà một bên liên quan
phi kỹ thuật thực sự dùng được.

Lựa chọn khung tổ chức đó là có chủ đích. Các chỉ số DORA, tần suất triển khai, thời
gian dẫn, tỷ lệ thay đổi thất bại và thời gian phục hồi, thực sự được kiểm chứng bằng
nghiên cứu và vẫn là một trong những khung phân phối có bằng chứng tốt nhất hiện có,
nhưng chúng đo cơ chế của đường ống, không phải thứ đang chảy qua nó. Một đội có thể
đăng những con số DORA xuất sắc trong khi giá trị thực sự được giao đã lặng lẽ trôi về
phía làm lại hoặc rời xa công việc nợ và rủi ro vốn bảo vệ tương lai của hệ thống. Phần
này bao quát DORA đầy đủ, nhưng như một chủ đề tham chiếu duy nhất, hợp nhất ở cuối
(chủ đề 2.10), vì câu hỏi cấp bách hơn, thường bị thiếu hơn ở phần lớn tổ chức không phải
là "đường ống của chúng ta nhanh đến đâu" mà là "đường ống của chúng ta thực sự đang giao
gì". Mọi chủ đề trong phần này vẫn theo cùng kỷ luật đã thiết lập ở Phần 1: nêu chỉ số,
gọi tên cách nó bị lách, và ghép nó với rào chắn bắt được việc lách đó.

Với các đội lớn, chỉ số luồng là thứ khiến việc so sánh xuyên đội khả thi mà không mất
dấu giá trị. Một đội nền tảng, một đội di động và một đội dữ liệu có thể gần như không
có điểm chung trong công việc hằng ngày, nhưng vận tốc luồng và phân bổ luồng, được tính
nhất quán, cho phép lãnh đạo đặt một câu hỏi công bằng xuyên cả ba: đội này có đang giao
loại giá trị mà giai đoạn hiện tại của nó thực sự đòi hỏi không. Các tổ chức doanh nghiệp
và chính phủ dựa vào các chỉ số của phần này để biện minh đầu tư nền tảng, so sánh lợi
tức của các nỗ lực hiện đại hóa cạnh tranh, và chứng minh, bằng bằng chứng thay vì giai
thoại, rằng năng lực kỹ thuật được phân bổ đúng như lãnh đạo tin.

## Các chủ đề trong phần này

- **2.1 Flow Framework:** Nguồn gốc của khung, mô hình chuỗi giá trị của nó, và vì sao
  cuốn sách này dùng nó, thay vì chỉ DORA, để tổ chức các chỉ số phân phối và luồng.
- **2.2 Mục luồng: tính năng, lỗi, rủi ro và nợ:** Phân loại bốn kiểu của khung, việc
  phân bổ năng lực tổng bằng không của nó, và cách việc phân loại bị lách nếu áp dụng
  hồi tố.
- **2.3 Vận tốc luồng và phân bổ luồng:** Đã giao bao nhiêu và đó là loại giá trị nào,
  luôn được đọc cùng nhau.
- **2.4 Thời gian luồng và tải luồng:** Định luật Little chứng minh thế nào rằng một
  chuỗi giá trị quá tải chắc chắn chậm đi về mặt toán học, chứ không chỉ có khả năng.
- **2.5 Hiệu suất luồng và công việc đang thực hiện:** Vì sao bận rộn không đồng nghĩa
  với nhanh, và việc giới hạn công việc đang thực hiện cải thiện thông lượng một cách
  trái trực giác như thế nào.
- **2.6 Thời gian chu kỳ và các thành phần của nó:** Phân rã thời gian kỹ thuật của một
  thay đổi thành các giai đoạn cấu thành để đội biết chính xác thời gian đang đi đâu.
- **2.7 Lý thuyết hàng đợi:** Toán học nằm dưới tải luồng, thời gian luồng, thời gian chu
  kỳ và công việc đang thực hiện, và vì sao thời gian chờ trên một tài nguyên dùng chung
  bùng nổ khi mức sử dụng tiến gần giới hạn.
- **2.8 Chỉ số chuỗi giá trị Lean:** Bộ công cụ Lean kinh điển, thời gian dẫn, thời gian
  xử lý, thời gian chu kỳ, phần trăm hoàn chỉnh và chính xác, và takt time, mà các chỉ số
  đặc thù phần mềm của phần này bắt nguồn từ đó, và cách bắc cầu hai bộ từ vựng.
- **2.9 Chỉ số pull request và đánh giá mã:** Các chỉ số sống bên trong một giai đoạn
  đơn lẻ của đường ống phân phối, và cách chúng có thể làm méo chất lượng đánh giá nếu
  dùng cẩu thả.
- **2.10 Khung chỉ số DORA:** Bốn chỉ số DORA đầy đủ, cố ý đặt cuối vì chúng đo đường
  ống, không phải giá trị chảy qua nó.

## Các chủ đề này liên hệ với nhau như thế nào

Chủ đề 2.1 giới thiệu Flow Framework như một tổng thể; chủ đề 2.2 đưa ra phân loại các
mục luồng của nó, và các chủ đề 2.3 và 2.4 bao quát năm chỉ số luồng giữa chúng, vận tốc
và phân bổ cùng nhau, rồi thời gian và tải cùng nhau, với tải và thời gian được nối trực
tiếp với định luật Little. Các chủ đề 2.5 đến 2.7 phóng to vào cơ chế nằm dưới thời gian
luồng và thời gian chu kỳ cụ thể: hiệu suất luồng và công việc đang thực hiện giải thích
vì sao các giai đoạn kỹ thuật thường chậm hơn vẻ ngoài, thời gian chu kỳ phân rã phần
kỹ thuật đó thành các giai đoạn của nó, và lý thuyết hàng đợi chính thức hóa, bằng ngôn
ngữ toán học chứng minh được, vì sao mọi khẳng định của các chủ đề trước về tải, thời
gian chờ và mức sử dụng là đúng. Chủ đề 2.8 lùi lại để lần tất cả về nguồn gốc của nó
trong việc lập bản đồ chuỗi giá trị Lean kinh điển, bộ từ vựng chung mà các chỉ số đặc
thù phần mềm của phần này khái quát hóa từ đó. Chủ đề 2.9 bao quát giai đoạn đường ống
duy nhất mà phần lớn các đội cải thiện nhanh nhất. Chủ đề 2.10 khép phần lại với các chỉ
số DORA đầy đủ, được trình bày như một lớp tham chiếu có bằng chứng tốt nhưng hẹp hơn một
khi bức tranh rộng hơn, hướng kinh doanh từ các chủ đề trước đã hiện ra.

Kỷ luật rào chắn của phần này nối thẳng trở lại chủ đề 1.2: vận tốc luồng không bao giờ
được báo cáo mà không có phân bổ luồng bên cạnh, và các chỉ số tốc độ của DORA vẫn được
ghép với các chỉ số ổn định của nó, để một đội không thể cải thiện một con số tốc độ bằng
cách lặng lẽ phát hành mã rủi ro hơn hoặc một hỗn hợp giá trị hẹp hơn. Sự ghép đôi đó
không phải ngẫu nhiên với cả hai khung; nó là hiểu biết trung tâm của mỗi khung, và các
chỉ số độ tin cậy của Phần 6 kéo dài nửa ổn định của sự ghép đôi đó vào vận hành production
một khi mã đã được phát hành.
