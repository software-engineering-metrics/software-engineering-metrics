# Ví dụ: đặc tả bảng điều khiển cho bảng điều khiển chỉ số phân phối

Một đặc tả bảng điều khiển hoàn chỉnh, theo
[chủ đề 8.1, Thiết kế bảng điều khiển chỉ số kỹ thuật](../chủ-đề/08-01-thiết-kế-bảng-điều-khiển-chỉ-số-kỹ-thuật.md).
Điều quan trọng là hình dạng: một nhóm người xem có tên, một số ít ô, một chuẩn
trực quan hóa trung thực, và một nhịp làm mới được nêu rõ.

## Người xem

Lãnh đạo kỹ thuật và đội nền tảng, xem xét tại buổi rà soát phân phối hai tuần
một lần. Không nhằm đánh giá hiệu suất cá nhân.

## Các ô (theo thứ tự hiển thị)

1. **Tần suất triển khai**, 4 tuần gần nhất, theo đội. Biểu đồ đường, nhóm theo
   tuần, trục bắt đầu từ không.
2. **Thời gian dẫn của thay đổi**, trung vị và phân vị thứ 90, 4 tuần gần nhất.
   Biểu đồ cột hiển thị cả hai chuỗi, không chỉ trung vị.
3. **Tỷ lệ thay đổi thất bại**, 4 tuần gần nhất, kèm liên kết từ ô đến định nghĩa
   "thất bại" mà đội đã thống nhất.
4. **Thời gian phục hồi sau triển khai thất bại**, trung vị, 4 tuần gần nhất.
5. **Ngân sách lỗi còn lại**, quý hiện tại, theo từng dịch vụ, tính theo phần
   trăm.

## Quy tắc trực quan hóa

- Mọi biểu đồ xu hướng đều hiển thị ít nhất tám điểm dữ liệu, không bao giờ chỉ
  là một ảnh chụp đơn lẻ.
- Trục bắt đầu từ không, trừ khi có ngoại lệ được nêu rõ và ghi lại trên ô.
- Các lần triển khai, sự cố và kỳ nghỉ được chú thích trên đường thời gian để
  người đọc phân biệt được thay đổi thật với nhiễu.
- Không dùng trục kép, không hiệu ứng 3D, không chọn khoảng ngày có lợi.

## Nhịp làm mới

Các ô lấy từ đường ống (tần suất triển khai, thời gian dẫn) làm mới mỗi giờ. Các
ô lấy từ sự cố (tỷ lệ thay đổi thất bại, thời gian phục hồi) làm mới khi đóng
postmortem. Bảng điều khiển ghi rõ thời điểm làm mới gần nhất của chính nó.

## Những gì bảng điều khiển này cố ý loại trừ

Số commit cá nhân, số pull request cá nhân, và số dòng mã. Đây là các chỉ số
hoạt động có lịch sử bị lách được ghi nhận rõ ràng, và đo nỗ lực chứ không phải
kết quả (chủ đề 3.4).
