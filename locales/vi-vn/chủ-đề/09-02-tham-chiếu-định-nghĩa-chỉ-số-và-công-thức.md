# 9.2 Tham chiếu định nghĩa chỉ số và công thức

Mọi công thức từ cuốn sách, gom ở một nơi. Mỗi mục nêu tên chủ đề có thảo luận đầy đủ, gồm cả rủi ro bị lách và rào chắn của nó. Hãy
dùng đây như một tra cứu nhanh, không thay cho chính chủ đề.

## Chỉ số luồng (Phần 2)

| Chỉ số | Công thức | Chủ đề |
| --- | --- | --- |
| Vận tốc luồng | Số mục luồng hoàn thành trên mỗi đơn vị thời gian | 2.3 |
| Phân bổ luồng | (Số mục hoàn thành của một loại mục luồng) / (Tổng số mục hoàn thành) x 100% | 2.3 |
| Thời gian luồng | Thời gian từ khi một mục luồng vào dòng giá trị đến khi được giao | 2.4 |
| Tải luồng | Số mục luồng hiện đang hoạt động hoặc đang chờ trong dòng giá trị | 2.4 |
| Định luật Little | Tải luồng (công việc đang thực hiện) = Tốc độ đến x Thời gian luồng (thời gian chu kỳ) | 2.4, 2.7 |
| Hiệu suất luồng | Thời gian làm việc chủ động / Tổng thời gian đã trôi qua x 100% | 2.5 |
| Thời gian chu kỳ | Tổng thời lượng các giai đoạn: viết mã + tiếp nhận + đánh giá + kiểm thử + triển khai | 2.6 |
| Mức sử dụng | Tốc độ đến / Tốc độ phục vụ | 2.7 |
| Tỷ lệ hoàn chỉnh và chính xác (%C/A) | (Số đơn vị dùng được ở hạ nguồn mà không làm lại) / (Tổng số đơn vị) x 100% | 2.8 |
| Thông lượng cuộn | %C/A của giai đoạn 1 x %C/A của giai đoạn 2 x ... x %C/A của giai đoạn N | 2.8 |
| Takt time | Thời gian làm việc sẵn có / Nhu cầu khách hàng trong giai đoạn đó | 2.8 |
| Thời gian đến lần đánh giá đầu tiên | Thời gian từ khi pull request được mở đến phản hồi đáng kể đầu tiên của người đánh giá | 2.9 |
| Tần suất triển khai | Số lần triển khai production thành công trên mỗi đơn vị thời gian | 2.10 |
| Thời gian dẫn cho thay đổi | Thời gian từ commit đầu tiên đến triển khai production thành công (báo cáo trung vị và bách phân vị thứ 90) | 2.10 |
| Tỷ lệ thay đổi thất bại | (Số lần triển khai gây thất bại) / (Tổng số lần triển khai) x 100% | 2.10 |
| Thời gian khôi phục sau triển khai thất bại | Thời gian từ lúc phát hiện thất bại đến khi dịch vụ thực sự được khôi phục | 2.10 |

## Trải nghiệm lập trình viên (Phần 3)

| Chỉ số | Công thức | Chủ đề |
| --- | --- | --- |
| Thời gian tập trung | Số lượng và thời lượng các khối từ hai giờ trở lên không bị gián đoạn mỗi tuần, từ dữ liệu lịch | 3.6 |
| Tỷ lệ phản hồi | (Số phản hồi khảo sát nhận được) / (Số lời mời khảo sát đã gửi) x 100% | 3.7 |

## Mã và chất lượng (Phần 4)

| Chỉ số | Công thức | Chủ đề |
| --- | --- | --- |
| Độ phức tạp chu trình | Số đường độc lập qua luồng điều khiển (cạnh − nút + 2, theo McCabe) | 4.1 |
| Độ bao phủ kiểm thử | (Số dòng/nhánh được kiểm thử thực thi) / (Tổng số dòng/nhánh) x 100% | 4.2 |
| Tỷ lệ giết đột biến | (Số đột biến bị bộ kiểm thử giết) / (Tổng số đột biến đã đưa vào) x 100% | 4.2 |
| Mức thay đổi mã | Số dòng thêm + sửa + xóa trên mỗi tệp trong một cửa sổ thời gian | 4.3 |
| Điểm số điểm nóng | Mức thay đổi x Độ phức tạp, xếp hạng theo từng tệp | 4.3 |
| Chi phí gánh nợ | Chi phí liên tục ước tính của việc không sửa một mục (công việc liên quan chậm đi, rủi ro lỗi tăng cao) | 4.5 |

## Sản phẩm và kinh doanh (Phần 5)

| Chỉ số | Công thức | Chủ đề |
| --- | --- | --- |
| Tỷ lệ lỗi lọt | (Lỗi lọt gia quyền theo mức nghiêm trọng) / (Đơn vị phân phối hoặc thời gian) | 5.1 |
| Mức áp dụng ban đầu | (Số người dùng đã thử tính năng ít nhất một lần) / (Đối tượng mục tiêu) x 100% | 5.2 |
| Mức áp dụng được giữ chân | (Số người dùng vẫn dùng tính năng sau N tuần) / (Số người dùng đã thử ban đầu) x 100% | 5.2 |
| Chi phí đơn vị | Tổng chi phí (nhân sự + hạ tầng + công cụ) / Đơn vị có ý nghĩa (khách hàng, giao dịch) | 5.4 |
| ROI | (Tổng lợi ích − Tổng chi phí sở hữu) / Tổng chi phí sở hữu, trình bày như một khoảng | 5.5 |

## Độ tin cậy, vận hành và bảo mật (Phần 6)

| Chỉ số | Công thức | Chủ đề |
| --- | --- | --- |
| Ngân sách lỗi | (1 − mục tiêu SLO) x Cửa sổ thời gian (ví dụ 0,1% của 30 ngày ≈ 43 phút) | 6.1 |
| Tốc độ đốt ngân sách lỗi | Ngân sách lỗi đã tiêu thụ / Ngân sách lỗi được cấp, trong một cửa sổ nhất định | 6.1 |
| MTTD | Thời gian từ lúc sự cố bắt đầu đến khi được phát hiện | 6.2 |
| MTTA | Thời gian từ lúc sự cố được thông báo đến khi được tiếp nhận | 6.2 |
| MTTR (sự cố) | Thời gian từ lúc tiếp nhận đến khi dịch vụ thực sự được khôi phục | 6.2 |
| Phân bổ cuộc gọi trực ca | Số cuộc gọi nhận được trên mỗi cá nhân, trong một cửa sổ trượt (không phải trung bình đội) | 6.3 |
| Thời gian khắc phục lỗ hổng | Thời gian từ lúc phát hiện đến khi khắc phục thật, theo dõi theo mức nghiêm trọng | 6.4 |

## Ghi chú khi dùng các công thức này

- **Luôn ghép một công thức tốc độ hoặc đầu ra với rào chắn của nó** (chủ đề 1.2): tỷ lệ thay đổi thất bại với tần suất triển khai và
  thời gian dẫn; tỷ lệ lỗi lọt với tốc độ phân phối; tốc độ đốt ngân sách lỗi với hoạt động triển khai.
- **Hãy dùng trung vị và bách phân vị, không dùng trung bình, cho các công thức dựa trên thời gian** (chủ đề 1.6) trừ khi một công thức
  tường minh yêu cầu giá trị trung bình.
- **Mọi công thức cần một hệ thống nguồn và phương pháp thu thập được ghi chép** (chủ đề 1.5) bên cạnh định nghĩa toán học của nó; hai
  đội tính cùng một công thức từ các nguồn khác nhau sẽ không tạo ra những con số so sánh được.
- **Việc gia quyền theo mức nghiêm trọng không được thể hiện tường minh trong mọi công thức ở trên** nhưng áp dụng ở bất cứ nơi nào xuất
  hiện "gia quyền theo mức nghiêm trọng"; hãy xem chủ đề liên quan để biết đầy đủ sơ đồ phân loại.
