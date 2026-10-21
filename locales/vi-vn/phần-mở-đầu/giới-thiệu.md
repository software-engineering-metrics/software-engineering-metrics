# Giới thiệu

Cuốn sách này là một hướng dẫn thực hành để đo lường [kỹ thuật phần mềm](https://en.wikipedia.org/wiki/Software_engineering)
cho tốt, dành cho các đội ngũ ở mọi quy mô, từ một công ty khởi nghiệp năm
người đến doanh nghiệp hàng nghìn kỹ sư hay một cơ quan chính phủ báo cáo theo
khung hiệu suất theo luật định. Nó ra đời vì phần lớn lời khuyên về chỉ số hoặc
chỉ là bản tóm tắt khung mà thiếu chi tiết vận hành, hoặc là danh sách tính năng
của nhà cung cấp công cụ. Cuốn sách này cố không thuộc loại nào: nó có chính
kiến về việc nên đo gì, rõ ràng về cách mỗi chỉ số bị lách, và thực tế về cách
vận hành một chương trình chỉ số mà đội ngũ tin tưởng thay vì sợ hãi.

## Dành cho ai

Đối tượng chính là những người chọn tổ chức đo cái gì: lãnh đạo kỹ thuật, kỹ sư
cấp staff và principal, các đội nền tảng và DevOps, cùng các quản lý chương
trình và sản phẩm. Đối tượng phụ là bất kỳ kỹ sư nào muốn hiểu lập luận đằng sau
một bảng điều khiển mà họ được yêu cầu làm cho nhích lên, và cách phản biện một
chỉ số đã không còn phục vụ mục đích của nó. Bạn không cần đọc từ đầu đến cuối.
Mỗi chủ đề tự đứng được một mình, nêu nguyên tắc trước, và kết thúc bằng các
điểm rút ra thực tế, một mô hình trưởng thành và tài liệu tham khảo.

## Cuốn sách được tổ chức như thế nào

Cuốn sách chia thành các **phần** (số nguyên) và **chủ đề** (số thập phân). Chủ
đề **N.0** giới thiệu từng phần và giải thích các chủ đề của nó liên hệ với nhau
ra sao; các chủ đề **N.1, N.2, …** đi sâu vào từng nội dung.

- **Phần 1, Nền tảng của đo lường:** vì sao phải đo, định luật Goodhart và tâm
  lý học của việc lách chỉ số, chọn kết quả thay vì sản lượng, quản trị và quyền
  sở hữu, nguồn dữ liệu, và hiểu biết thống kê mà mọi chương trình chỉ số đều
  cần.
- **Phần 2, Chỉ số luồng:** Flow Framework, các mục luồng và năm chỉ số luồng
  của nó, thời gian chu kỳ, lý thuyết hàng đợi, các chỉ số chuỗi giá trị Lean cổ
  điển, chỉ số pull request và đánh giá mã, cùng khung DORA như một chủ đề tham
  chiếu.
- **Phần 3, Trải nghiệm lập trình viên và khung SPACE:** khung SPACE và năm chiều
  của nó, và cách tiến hành khảo sát trải nghiệm lập trình viên mà không biến nó
  thành một cuộc thi nổi tiếng.
- **Phần 4, Chỉ số mã nguồn và chất lượng:** độ phức tạp, độ bao phủ và hiệu quả
  của kiểm thử, biến động mã và điểm nóng, phân tích tĩnh, nợ kỹ thuật, và tài
  liệu.
- **Phần 5, Chỉ số sản phẩm và kinh doanh:** lỗi lọt, việc áp dụng tính năng, kết
  quả đối với khách hàng và doanh nghiệp, kinh tế học đơn vị, và lợi tức đầu tư.
- **Phần 6, Chỉ số độ tin cậy, vận hành và bảo mật:** SLI, SLO và ngân sách lỗi,
  chỉ số sự cố, trực ca và năng lực, cùng chỉ số bảo mật và lỗ hổng.
- **Phần 7, Chỉ số trong thời đại AI:** bước ngoặt mô hình của AI sinh tạo, cách
  đo phát triển có AI hỗ trợ, rủi ro lạm phát chỉ số, và vì sao dữ liệu đo từ kết
  quả trở thành kim chỉ nam khi sản lượng ngày càng rẻ.
- **Phần 8, Xây dựng chương trình chỉ số:** thiết kế bảng điều khiển, tự xây hay
  mua, triển khai chỉ số mà không gieo nỗi sợ, mô hình trưởng thành, và lộ trình
  áp dụng từng bước.
- **Phần 9, Phụ lục:** bảng thuật ngữ, tài liệu tham chiếu về định nghĩa và công
  thức chỉ số, danh sách kiểm tra, biểu mẫu, tự đánh giá mức trưởng thành, tài
  liệu tham khảo, và chỉ mục.

## Các nguyên tắc dẫn đường

Tám nguyên tắc tạo thành xương sống của cuốn sách:

1. **Một thước đo trở thành mục tiêu thì không còn là thước đo tốt.** Hãy thiết
   kế chống lại định luật Goodhart ngay từ đầu, không đợi đến khi sự méo mó xuất
   hiện.
2. **Kết quả trước sản lượng, sản lượng trước hoạt động.** Hãy nghiêng mọi bộ chỉ
   số về những gì đã thay đổi đối với khách hàng hay doanh nghiệp, không phải
   những gì đội ngũ làm ra hay mức độ bận rộn của họ.
3. **Mỗi chỉ số có khuyến khích đều cần một rào chắn.** Ghép tốc độ với chất
   lượng, thông lượng với độ ổn định, và không bao giờ theo đuổi một con số một
   cách đơn độc.
4. **Đo hệ thống, không đo con người.** Chỉ số cá nhân hóa việc đổ lỗi sẽ phá vỡ
   niềm tin và mời gọi việc lách; chỉ số phơi bày một ràng buộc của hệ thống sẽ
   mời gọi cải tiến.
5. **Ưu tiên đo đạc tự động hơn tự báo cáo khi có thể, và tự báo cáo khi không
   thể.** Số lần triển khai đến từ đường ống; sự hài lòng đến từ việc hỏi người
   ta.
6. **Một chỉ số phải xứng đáng được giữ lại, nếu không sẽ bị loại bỏ.** Mỗi ô
   trên bảng điều khiển đều tốn sự chú ý. Hãy cắt tỉa có chủ đích.
7. **Định nghĩa quan trọng hơn bảng điều khiển.** Hai đội tính "thời gian dẫn"
   theo hai cách khác nhau sẽ tốn nhiều thời gian tranh cãi về con số hơn là hành
   động dựa trên nó.
8. **AI sinh tạo là lý do để xem xét lại, không chỉ để đặt lại mốc chuẩn.** Khi
   sản lượng trở nên rẻ, các chỉ số xây quanh khối lượng sản lượng cần rào chắn
   mới, chứ không chỉ mục tiêu mới.

## Các chủ đề xuyên suốt

[Định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) là chủ đề
duy nhất chạy xuyên qua mọi phần của cuốn sách, không chỉ ở chủ đề 1.2. Mỗi chủ
đề về một họ chỉ số đều nêu chỉ số mà nó bao quát bị lách như thế nào và rào chắn
nào bắt được điều đó. Các nghĩa vụ báo cáo của chính phủ và doanh nghiệp, nơi một
chỉ số có thể mang sức nặng theo luật định hoặc hợp đồng, được coi là đầu vào
thiết kế xuyên suốt, không phải điều nghĩ sau bị nhốt trong một chủ đề.

## Cách sử dụng

Hãy áp dụng dần dần; đừng ném cả bảng điều khiển vào một đội chưa từng có bảng
nào. Hãy bắt đầu từ nơi đau nhất, dùng mô hình trưởng thành của từng chủ đề để tự
định vị một cách trung thực, và để lộ trình áp dụng (chủ đề 8.5) sắp xếp thứ tự
công việc. Mục tiêu không phải là một bức tường biểu đồ. Mục tiêu là một tổ chức
có thể nói, bằng bằng chứng, rằng việc mình đang làm có hiệu quả hay không, và đủ
tin các con số của chính mình để hành động theo chúng.
