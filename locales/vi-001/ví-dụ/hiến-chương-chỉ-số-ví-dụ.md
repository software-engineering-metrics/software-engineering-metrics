# Ví dụ: hiến chương chỉ số cho đội nền tảng thanh toán

Một ví dụ hoàn chỉnh về hiến chương chỉ số, loại tài liệu một trang được mô tả
trong [chủ đề 1.4, Quản trị và quyền sở hữu chỉ số](../chủ-đề/01-04-quản-trị-và-quyền-sở-hữu-chỉ-số.md).
Điều quan trọng là hình dạng: một mục đích được nêu rõ, một phi-mục-tiêu tường
minh, các chủ sở hữu có tên, và một nhịp rà soát. Một hiến chương ngắn như vậy
là để được đọc, không phải để lưu hồ sơ.

- **Đội:** Nền tảng thanh toán
- **Chủ sở hữu:** Quản lý kỹ thuật nền tảng
- **Rà soát:** Hằng quý, tại buổi rà soát nền tảng

## Mục đích

Hiến chương này điều chỉnh các chỉ số mà đội nền tảng thanh toán theo dõi về
việc phân phối và độ tin cậy của chính mình. Nó tồn tại để mọi người, trong và
ngoài đội, đều thấy được cái gì được đo, vì sao, và nó không dùng cho việc gì.

## Chúng tôi theo dõi gì

| Chỉ số | Nguồn sự thật | Chủ sở hữu |
| --- | --- | --- |
| Tần suất triển khai | Đường ống CI/CD | Trưởng nhóm nền tảng |
| Thời gian dẫn của thay đổi | Git cùng đường ống triển khai | Trưởng nhóm nền tảng |
| Tỷ lệ thay đổi thất bại | Công cụ theo dõi sự cố, gắn thẻ theo lần triển khai | Trưởng ca trực |
| Thời gian phục hồi sau triển khai thất bại | Công cụ theo dõi sự cố | Trưởng ca trực |
| Độ trễ API P99 (SLI) | Nền tảng quan sát | Trưởng SRE |
| Tốc độ tiêu hao ngân sách lỗi | Nền tảng quan sát | Trưởng SRE |

## Phi-mục-tiêu

Các chỉ số này không bao giờ được dùng, riêng lẻ hay kết hợp, để xếp hạng kỹ sư,
đánh giá hiệu suất cá nhân, hay so sánh đội này với lộ trình của đội khác mà
không so sánh cả phạm vi, nhân sự và độ trưởng thành của hệ thống. Mọi việc sử
dụng ngoài mục đích nêu trên đều cần sự chấp thuận của giám đốc kỹ thuật và của
chính đội.

## Rào chắn

Mọi chỉ số ở trên có kèm khuyến khích đều được ghép với một rào chắn. Thời gian
dẫn của thay đổi được theo dõi cùng tỷ lệ thay đổi thất bại, để đội không thể cải
thiện con số tốc độ bằng cách phát hành những thay đổi rủi ro hơn. Tần suất triển
khai được theo dõi cùng tốc độ tiêu hao ngân sách lỗi, vì cùng lý do đó.

## Nhịp rà soát

Đội rà soát hiến chương này mỗi quý. Một chỉ số không làm thay đổi quyết định nào
trong hai quý liên tiếp là ứng viên để loại bỏ.
