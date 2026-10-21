# Biên soạn: viết và sửa chủ đề

## Trước khi viết

- Đọc [quy tắc văn phong](style-rules.md) và `spec/conventions.md` ở gốc
  kho.
- Kiểm tra `spec/structure.md` ở gốc kho để xem chủ đề khớp ở đâu và nên mang số
  nào.

## Viết một chủ đề mới

1. Chọn phần và số thập phân trống kế tiếp trong phần đó. Việc đánh số liên tục,
   nên một chủ đề mới thường lấy số kế tiếp sau chủ đề cuối trong phần của nó.
2. Tạo `locales/en-gb-oxendict/topics/PP-CC-slug.md` (tiền tố đệm số không, ngăn
   bằng dấu gạch ngang, ví dụ `02-01-...`) từ
   [mẫu chủ đề](chapter-template.md). Viết bằng chính tả Oxford (xem
   `spec/oxford-spelling.md`); không bao giờ sửa trực tiếp ba locale còn lại.
3. Viết theo mẫu. Mọi chủ đề nội dung đều cần đủ các mục: tổng quan, các nguyên
   tắc chính, khuyến nghị, đánh đổi (kèm bảng), câu hỏi thảo luận, góc nhìn theo
   quy mô (khởi nghiệp, doanh nghiệp nhỏ, doanh nghiệp lớn, chính phủ), ví dụ (một
   doanh nghiệp và một chính phủ), hồ sơ kinh doanh, phản mẫu, mô hình trưởng
   thành năm mức, ý tưởng thảo luận, điểm chính cần nhớ, và tài liệu tham khảo.
4. Nêu tên véc-tơ bị lách. Mỗi họ chỉ số cần một câu trả lời tường minh cho "một
   đội làm sao khiến con số này trông đẹp mà không cải thiện thứ nó đo, và rào
   chắn nào bắt được điều đó" (xem chủ đề 1.2).
5. Định nghĩa thuật ngữ ngay lần đầu dùng. Thêm liên kết Wikipedia cho các khái
   niệm chính ở lần nhắc đầu tiên, chỉ trong văn xuôi.
6. Tham chiếu chéo các chủ đề liên quan theo số thập phân, ví dụ "(chủ đề 2.1)."
7. Thêm chủ đề vào `spec/structure.md`.
8. Nếu phần giới thiệu (N.0) liệt kê các chủ đề của nó, hãy thêm một gạch đầu
   dòng ở đó.
9. Chạy `python3 tools/localize.py` để suy chủ đề sang `en-001`, `en-gb` và
   `en-us`.
10. Chạy `just nav`, rồi `just test`.

## Sửa một chủ đề có sẵn

- Giữ nguyên thứ tự mục và tiêu đề. Các kiểm thử kiểm tra rằng các chủ đề nội
  dung vẫn có mọi mục bắt buộc.
- Giữ lại các định nghĩa nội tuyến, liên kết Wikipedia, bảng và danh sách tài
  liệu tham khảo, trừ khi việc sửa nhắm cụ thể vào chúng.
- Không đưa vào dấu gạch ngang dài hay các cụm từ bị cấm. Nếu đang diễn đạt lại,
  hãy viết lại thay vì chèn một dấu gạch.
- Sau đó chạy `python3 tools/localize.py` để suy lại `en-001`, `en-gb` và `en-us`
  từ nguồn `en-gb-oxendict` đã sửa.

## Đổi tên hoặc đánh số lại

- Đổi tên tệp trong `locales/en-gb-oxendict/`, cập nhật tiêu đề `# N.M Title` của
  nó, cập nhật `spec/structure.md`, và cập nhật mọi tham chiếu chéo trỏ đến số
  cũ.
- Chạy `python3 tools/localize.py` để đổi tên tệp ở ba locale còn lại (nó suy cả
  bốn từ cùng các đường dẫn tương đối).
- Chạy `just nav` và `just test`. Các kiểm thử sẽ báo sự không khớp giữa H1 và
  tên tệp, một khoảng hở trong việc đánh số, một locale đã trôi khỏi nguồn, hoặc
  một liên kết hỏng.

## Nhắc nhở về giọng văn

Hãy viết như một đồng nghiệp giàu kinh nghiệm muốn người đọc thành công. Ấm áp,
giản dị, trực tiếp và hữu ích. Câu ngắn. Không độn chữ.
