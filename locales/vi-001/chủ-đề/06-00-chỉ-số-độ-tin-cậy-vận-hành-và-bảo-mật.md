# 6.0 Giới thiệu Phần 6: Chỉ số độ tin cậy, vận hành và bảo mật

Phần 2 đã bàn một thay đổi đi từ commit đến production như thế nào; phần này bàn điều xảy ra khi nó chạy ở đó, vô thời hạn, trong những
điều kiện thật mà đội không thể kiểm soát hoàn toàn. Các chỉ số độ tin cậy, vận hành và bảo mật là nơi những lời hứa của kỹ thuật phần
mềm gặp thực tế kéo dài: không phải "lần triển khai này có thành công không" mà là "hệ thống này có tiếp tục hoạt động không, đêm này
qua đêm khác, dưới tải, dưới tấn công, và dưới sức ép của một vòng trực ca phải bền vững trong nhiều năm, không chỉ cho sự cố kế tiếp."

Bốn chủ đề của phần này theo một mạch có chủ đích. Chỉ báo mức dịch vụ và mục tiêu (chủ đề 6.1) thiết lập từ vựng và kỷ luật đặt mục tiêu
mà mọi thứ khác trong phần này phụ thuộc vào. Chỉ số sự cố (chủ đề 6.2) đo điều xảy ra khi mục tiêu đó bị lỡ. Chỉ số trực ca và năng
lực (chủ đề 6.3) đo chi phí về con người và hạ tầng của việc giữ mục tiêu được đáp ứng. Chỉ số bảo mật và lỗ hổng (chủ đề 6.4) mở rộng
cùng kỷ luật độ tin cậy sang một rủi ro riêng biệt nhưng liên quan chặt chẽ: không phải "hệ thống này có tự hỏng không" mà là "có ai
cố ý làm nó hỏng không." Cả bốn chủ đề chia sẻ kỷ luật trung tâm của cuốn sách này: gọi tên chỉ số, gọi tên cách nó bị lách, và ghép nó
với rào chắn bắt được việc lách đó.

Với các đội lớn, các chỉ số của phần này là nơi lời hứa của kỹ thuật trở thành ràng buộc hợp đồng và, trong bối cảnh chính phủ, đôi khi
là pháp lý. Các tổ chức doanh nghiệp viết thỏa thuận mức dịch vụ dựa trên các chỉ số mà chủ đề 6.1 giới thiệu, với các khoản phạt tài
chính thật nếu lỡ; các tổ chức chính phủ vận hành hạ tầng công quan trọng nơi một thất bại về độ tin cậy hay bảo mật mang hệ quả vượt xa
bảng cân đối của một công ty đơn lẻ. Phần này đối xử nghiêm túc với sức nặng đó xuyên suốt.

## Các chủ đề trong phần này

- **6.1 Chỉ báo mức dịch vụ, mục tiêu mức dịch vụ và ngân sách lỗi:** Từ vựng và kỷ luật đặt mục tiêu làm nền cho toàn bộ kỹ thuật độ tin
  cậy trang web, và cách một ngân sách lỗi biến độ tin cậy thành một nguồn lực chi tiêu được, quản lý được thay vì một tuyệt đối không
  thể đạt.
- **6.2 Chỉ số sự cố: phát hiện, ứng phó và khôi phục:** Đo một tổ chức nhận ra, ứng phó và giải quyết một thất bại nhanh đến đâu, và
  kỷ luật không đổ lỗi giữ cho phép đo đó trung thực.
- **6.3 Chỉ số trực ca, năng lực và tải vận hành:** Chi phí con người và hạ tầng của việc duy trì độ tin cậy, và vì sao một gánh nặng
  trực ca không bền vững cuối cùng tự nó hiện ra thành một vấn đề độ tin cậy.
- **6.4 Chỉ số bảo mật và quản lý lỗ hổng:** Mở rộng cùng cách tiếp cận có kỷ luật, ghép với rào chắn sang rủi ro bảo mật, từ phát hiện
  lỗ hổng đến khắc phục.

## Các chủ đề này liên hệ với nhau như thế nào

Chủ đề 6.1 đặt nền móng mà mọi chủ đề sau trong phần này dựa vào: không có mục tiêu mức dịch vụ rõ ràng, "sự cố này tệ đến đâu" (chủ đề
6.2) và "tải trực ca của chúng ta có bền vững không" (chủ đề 6.3) không có điểm tham chiếu chung để đo. Các chỉ số sự cố của chủ đề 6.2,
theo nghĩa thật, là bản ghi việc chi tiêu ngân sách lỗi mà chủ đề 6.1 giới thiệu; chủ đề 6.3 đo tính bền vững của hệ thống con người chịu
trách nhiệm giữ khoản chi tiêu đó trong ngân sách; và chủ đề 6.4 áp dụng cùng tư duy mục tiêu-và-ngân sách cho một tư thế bảo mật mà, nếu
không đo, có xu hướng chỉ nhận sự chú ý theo kiểu phản ứng, sau một sự cố, thay vì chủ động.

Phần này nối trực tiếp trở lại Phần 2: tỷ lệ thay đổi thất bại của DORA và thời gian khôi phục sau triển khai thất bại (cả hai đều được
bàn ở chủ đề 2.10) lần lượt là một chỉ báo dẫn trước và một ví dụ của các chỉ số sự cố trong phần này. Nó cũng nối tiến tới Phần 8, nơi
hướng dẫn về bảng điều khiển và độ trưởng thành của chương trình dựa nhiều vào mô hình ngân sách lỗi của phần này như một ví dụ thực
hành về việc biến một mục tiêu trừu tượng (độ tin cậy, bảo mật) thành một mục tiêu cụ thể, theo dõi được, không tuyệt đối mà một đội có
thể thực sự quản lý hằng ngày.
