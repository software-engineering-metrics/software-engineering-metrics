# 1.0 Giới thiệu Phần 1: Nền tảng của đo lường

Trước khi cuốn sách này gọi tên một chỉ số nào, nó phải trả lời một câu hỏi khó
hơn: đo lường là *để làm gì*? Mọi đội từng dựng một bảng điều khiển cuối cùng đều
từng chứng kiến một con số cải thiện trong khi thứ mà nó phải đại diện lại tệ đi.
Đó không phải là lỗi công cụ. Đó là kết quả có thể đoán trước của việc bỏ qua các
nền tảng mà phần này bao quát: vì sao bạn đo lường ngay từ đầu, điều gì xảy ra
với một chỉ số khi mọi người biết nó đang bị theo dõi, cách ưu tiên kết quả hơn
hoạt động, ai sở hữu một con số và định nghĩa của nó, dữ liệu thực sự đến từ đâu,
và cách đọc một tín hiệu nhiễu mà không tự đánh lừa mình.

Với các đội lớn, những nền tảng này thôi là tùy chọn. Một đội đơn lẻ có thể sống
với một con số tùy hứng mà quản lý liếc qua mỗi tuần một lần. Một tổ chức có hàng
trăm kỹ sư, hàng chục bảng điều khiển, và một ban lãnh đạo báo cáo lên trên thì
không thể. Ở quy mô đó, một chỉ số không có chủ hoặc được định nghĩa tồi không
chỉ đánh lạc hướng một đội, mà đánh lạc hướng mọi người ở hạ nguồn, những người
tin con số mà không kiểm tra nó được dựng ra sao, và rất tốn kém để gỡ ra một khi
hành vi đã thích nghi để lách nó.

Các tổ chức doanh nghiệp và chính phủ cảm nhận điều này mạnh nhất, vì chỉ số của
họ thường mang những hệ quả vượt ra ngoài đội tạo ra chúng: quyết định ngân sách,
báo cáo hiệu suất công khai, kết luận kiểm toán và hợp đồng nhà cung cấp. Một chỉ
số trông như tiện ích kỹ thuật nội bộ có thể lặng lẽ trở thành đầu vào then chốt,
không bị chất vấn, cho các quyết định của những người chưa bao giờ thấy đường ống
đã tạo ra nó. Làm đúng nền tảng là điều khiến sức nặng ấy chịu đựng được.

## Các chủ đề trong phần này

- **1.1 Vì sao đo lường kỹ thuật phần mềm:** Lập luận cho việc đo lường ngay từ
  đầu, nó được kỳ vọng đạt được gì, và sự khác biệt giữa đo để học và đo để phán
  xét.
- **1.2 Định luật Goodhart và tâm lý học của chỉ số:** Ý tưởng duy nhất chi phối
  mọi chủ đề khác của cuốn sách: một thước đo trở thành mục tiêu thì không còn là
  thước đo tốt, cùng các cơ chế tâm lý khiến việc lách gần như không thể tránh một
  khi người ta biết mình đang bị theo dõi.
- **1.3 Kết quả thay vì đầu ra: chọn đo lường điều gì:** Cách nghiêng một bộ chỉ
  số về kết quả thay vì hoạt động, dùng sự phân biệt kinh điển đầu vào/đầu
  ra/kết quả và mô thức ngôi sao Bắc Đẩu.
- **1.4 Quản trị và quyền sở hữu chỉ số:** Ai quyết định cái gì được đo, ai sở hữu
  một định nghĩa, và một hiến chương chỉ số giữ cho một bảng điều khiển đang lớn
  khỏi biến thành một mớ hỗn độn không ai chịu trách nhiệm.
- **1.5 Nguồn dữ liệu và công cụ đo đạc:** Các chỉ số kỹ thuật thực sự đến từ đâu,
  đo đạc tự động so với tự báo cáo, và những vấn đề chất lượng dữ liệu lặng lẽ làm
  mất hiệu lực một bảng điều khiển trước khi ai kịp nhận ra.
- **1.6 Hiểu biết thống kê cho chỉ số kỹ thuật:** Phán đoán thống kê tối thiểu mà
  một đội cần để đọc một chỉ số một cách trung thực: phân vị so với trung bình,
  cỡ mẫu, hồi quy về trung bình, và các biến gây nhiễu.

## Các chủ đề này liên hệ với nhau như thế nào

Sáu chủ đề này được xây theo một thứ tự chặt chẽ. Chủ đề 1.1 hỏi vì sao phải đo
ngay từ đầu, điều quan trọng vì một đội chưa trả lời câu này sẽ thu thập những con
số không ai hành động theo. Chủ đề 1.2 là trục xoay mà phần còn lại của cuốn sách
quay quanh: một khi bạn chấp nhận rằng mọi thước đo đều có thể trở thành mục tiêu
và bị lách, các khuyến nghị của mọi chủ đề sau đều đi theo từ việc thiết kế để
chống lại rủi ro đó. Chủ đề 1.3 biến sự thận trọng ấy thành một quy tắc tích cực:
nghiêng về kết quả, vì chúng là loại khó bị lách rẻ nhất. Chủ đề 1.4 làm quản trị
trở nên cụ thể, chủ đề 1.5 làm dữ liệu trở nên cụ thể, và chủ đề 1.6 cho bạn phán
đoán thống kê để không bị nhiễu đánh lừa ngay cả khi quản trị và đo đạc đã vững.

Mọi thứ ở hạ nguồn đều phụ thuộc vào phần này. Các chỉ số luồng và chỉ số DORA ở
Phần 2, cùng khung SPACE ở Phần 3, thực chất đều là các ví dụ minh họa của những
nguyên tắc ưu tiên kết quả và ghép rào chắn nêu trong chủ đề 1.2 và 1.3. Hướng dẫn
thiết kế bảng điều khiển ở chủ đề 8.1 giả định mô hình quản trị từ chủ đề 1.4. Và
mô hình trưởng thành khép lại mỗi chủ đề trong cuốn sách này, bên dưới năm mức của
nó, là một mô hình trưởng thành cho đúng kỷ luật mà phần này giới thiệu: đo lường
như thể bạn nghiêm túc, và kiểm tra lại công việc của chính mình.
