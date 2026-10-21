# 4.0 Giới thiệu Phần 4: Chỉ số mã và chất lượng

Các Phần 2 và 3 đo công việc di chuyển ra sao và những người tạo ra nó đang ra sao. Phần này quay sang chính sản phẩm: mã, và một chỉ
số có thể và không thể nói gì về chất lượng của nó. Các chỉ số chất lượng mã có lịch sử dài nhất trong mọi họ chỉ số của cuốn sách
này, độ phức tạp chu trình có từ năm 1976, và lịch sử dùng sai dài tương xứng. Phần này đối xử nghiêm túc với lịch sử đó: mỗi chủ
đề gọi tên một tín hiệu thực sự hữu ích bên cạnh cách cụ thể, được ghi nhận rõ mà tín hiệu đó bị lách một khi nó trở thành mục
tiêu.

Sợi chỉ xuyên suốt nối sáu chủ đề này là không chỉ số mã đơn lẻ nào tự nó nắm bắt được chất lượng, và nhiều chỉ số phổ biến nhất chủ
động gây hiểu lầm khi theo đuổi một cách cô lập. Một phần trăm bao phủ kiểm thử cao có thể cùng tồn tại với những kiểm thử không xác
minh điều gì có ý nghĩa. Một điểm phức tạp thấp có thể cùng tồn tại với mã đơn giản về mặt kỹ thuật nhưng không mạch lạc về mặt khái
niệm. Các chủ đề của phần này đều ghép chỉ số tiêu đề của mình với phép kiểm tra bổ sung bắt điểm mù cụ thể của nó: độ phức tạp với
bối cảnh khả năng bảo trì, độ bao phủ với kiểm thử đột biến, biến động mã với phân tích điểm nóng, phân tích tĩnh với phán đoán của
con người, và nợ kỹ thuật với việc khắc phục có ưu tiên thay vì một backlog ngày càng lớn, không ai yêu quý.

Với các đội lớn, chỉ số mã và chất lượng là thứ giúp quản lý một cơ sở mã quá lớn để bất kỳ ai giữ trong đầu. Một đội năm người có
thể dựa vào tri thức ngầm chung về những phần nào của hệ thống mong manh; một tổ chức năm trăm kỹ sư trải trên hàng chục dịch vụ cần
các tín hiệu được đo đạc để tìm sự mong manh đó một cách có hệ thống. Các tổ chức doanh nghiệp và chính phủ, thường mang những cơ sở
mã được đo bằng thập kỷ thay vì năm, dựa vào các chỉ số của phần này để ưu tiên nơi đầu tư bảo trì hạn chế sẽ đem lại nhiều lợi ích
nhất.

## Các chủ đề trong phần này

- **4.1 Chỉ số độ phức tạp của mã:** Độ phức tạp chu trình và các họ hàng của nó, chúng thực sự dự đoán điều gì, và rủi ro bị lách được
  ghi nhận rõ của chúng.
- **4.2 Độ bao phủ kiểm thử và hiệu quả kiểm thử:** Vì sao một phần trăm bao phủ riêng lẻ cho bạn biết ít hơn vẻ ngoài, và kiểm thử đột
  biến lấp khoảng trống ra sao.
- **4.3 Mức thay đổi mã và phân tích điểm nóng:** Tìm phần nhỏ, cụ thể của một cơ sở mã chịu trách nhiệm cho một tỷ trọng không cân xứng
  của lỗi và chi phí bảo trì.
- **4.4 Phân tích tĩnh và chỉ số code smell:** Các tín hiệu chất lượng mã tự động, giá trị thật của chúng, và giới hạn của chúng so với
  phán đoán của con người.
- **4.5 Đo lường nợ kỹ thuật:** Biến một khoản nợ vô hình, được bàn không chính thức thành một danh mục hữu hình, có ưu tiên, quản lý
  được.
- **4.6 Chỉ số tài liệu và tri thức:** Đo xem tài liệu có thực sự giúp ích không, không chỉ liệu nó có tồn tại không.

## Các chủ đề này liên hệ với nhau như thế nào

Sáu chủ đề này được xây từ đơn vị mã nhỏ nhất hướng ra ngoài. Chủ đề 4.1 bắt đầu ở cấp một hàm hay phương thức đơn lẻ; chủ đề 4.2 hỏi
liệu các kiểm thử có thực sự xác minh hành vi của đơn vị đó không; chủ đề 4.3 thu nhỏ ra để tìm tệp và mô-đun nào trên toàn cơ sở mã
xứng đáng được chú ý trước; chủ đề 4.4 thêm tầng công cụ tự động quét qua tất cả liên tục; chủ đề 4.5 biến các phát hiện tích lũy từ cả
bốn thành một backlog được quản lý, có ưu tiên thay vì một nỗi lo lan tỏa, chưa được giải quyết; và chủ đề 4.6 khép phần bằng việc đo
xem tri thức cần để duy trì tất cả điều này một cách an toàn có thực sự được ghi lại và tìm thấy được không.

Phần này nối trực tiếp trở lại các chỉ số ổn định của Phần 2: tỷ lệ thay đổi thất bại (chủ đề 2.10) phần lớn là hệ quả hạ nguồn của
chất lượng mã mà phần này đo ở thượng nguồn. Nó cũng nối tiến tới các chỉ số sản phẩm của Phần 5, vì các lỗi lọt (chủ đề 5.1) thường
truy ngược được về đúng những điểm nóng phức tạp và khoảng trống bao phủ mà phần này được xây để làm lộ ra trước khi chúng đến production.
