# Chỉ số kỹ thuật phần mềm là gì?

[Chỉ số kỹ thuật phần mềm](https://en.wikipedia.org/wiki/Software_metric)
là các phép đo định lượng dùng để đánh giá, theo dõi và cải thiện chất lượng,
hiệu quả và tác động của các quy trình, sản phẩm và đội ngũ phát triển phần
mềm. Khi được làm tốt, chúng đóng vai trò công cụ chẩn đoán có tính hệ thống:
làm lộ các điểm nghẽn vận hành, biện minh cho việc xử lý nợ kỹ thuật, và gắn
hoạt động kỹ thuật với các kết quả kinh doanh cụ thể. Khi bị làm sai, chúng
bóp méo hành vi, làm tổn hại niềm tin, và thưởng cho đúng những điều sai.

Cuốn sách này tồn tại vì phần lớn các đội ngũ tìm đến chỉ số trước khi quyết
định chỉ số *dùng để làm gì*. Một bảng điều khiển đầy lên với mọi thứ dễ đếm,
đội ngũ lãnh đạo bắt đầu hỏi "con số này tăng hay giảm", và chỉ trong một quý
đội ngũ đã tối ưu con số thay vì kết quả mà nó vốn đại diện. Thất bại đó có
một cái tên: [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law),
khi một thước đo trở thành mục tiêu thì nó không còn là một thước đo tốt. Mọi
chủ đề trong cuốn sách này đều được viết với định luật ấy đứng sau lưng.

## Hai khung nền tảng

Ngành đã phần lớn quy tụ về hai khung có cơ sở nghiên cứu để đo lường việc
phân phối kỹ thuật và sức khỏe đội ngũ.

**[Chỉ số DORA](https://dora.dev/guides/dora-metrics/)** (từ chương trình
DevOps Research and Assessment) đo thông lượng và độ ổn định của hệ thống: tần
suất triển khai, thời gian dẫn của thay đổi, tỷ lệ thay đổi thất bại, và thời
gian phục hồi sau triển khai thất bại. Phần 2 của cuốn sách bao quát cả bốn chỉ
số trong một chủ đề tham chiếu riêng, cùng với Flow Framework mà nó dùng để tổ
chức các chỉ số phân phối và luồng một cách rộng hơn, vì DORA đo cơ chế của
đường ống rất tốt nhưng không nói gì về loại giá trị đang chảy qua đường ống.

**[Khung SPACE](https://queue.acm.org/detail.cfm?id=3454124)**, do các nhà
nghiên cứu tại Microsoft, GitHub và Đại học Victoria tạo ra, cân bằng thông
lượng thô bằng trải nghiệm của lập trình viên trên năm chiều: sự hài lòng và
phúc lợi, hiệu suất, hoạt động, giao tiếp và cộng tác, cùng hiệu quả và luồng
công việc. Phần 3 trình bày sâu về khung này.

Ngoài hai khung này, các đội ngũ còn theo dõi các chỉ số cục bộ được nhóm theo
lĩnh vực: chỉ số mã nguồn và chất lượng (Phần 4), chỉ số sản phẩm và kinh doanh
(Phần 5), và chỉ số độ tin cậy, vận hành và bảo mật (Phần 6). Phần 7 bàn về một
chuyển dịch đang diễn ra: các công cụ AI sinh tạo đã khiến sản lượng mã thô gần
như miễn phí, nghĩa là một số chỉ số mà ngành đã dựa vào suốt một thập kỷ nay
không còn mang ý nghĩa như trước.

## Dành cho ai

Đối tượng chính là những người chọn đội ngũ đo cái gì và vì sao: lãnh đạo kỹ
thuật, kỹ sư cấp staff và principal, các đội nền tảng và DevOps, cùng các quản
lý chương trình và sản phẩm đang xây dựng bảng điều khiển hoặc bảng điểm chỉ số
lần đầu, hoặc đang sửa một bảng đã bắt đầu bóp méo hành vi. Đối tượng phụ là
bất kỳ kỹ sư nào muốn hiểu vì sao tổ chức của mình theo dõi những gì họ theo
dõi, và cách phản biện khi một chỉ số bị dùng sai.

## Cách đọc

Hãy bắt đầu từ đây, rồi đọc [phần giới thiệu](giới-thiệu.md) để biết cuốn sách
được tổ chức ra sao, hoặc nhảy thẳng đến [mục lục](mục-lục.md). Mỗi chủ đề tự
đứng được một mình: nêu nguyên tắc trước, đưa ra các khuyến nghị cụ thể, chỉ ra
chỉ số mà nó bao quát bị lách như thế nào, và kết thúc bằng mô hình trưởng
thành, các câu hỏi thảo luận và tài liệu tham khảo. Bạn không cần đọc cuốn sách
từ đầu đến cuối mới dùng được nó.
