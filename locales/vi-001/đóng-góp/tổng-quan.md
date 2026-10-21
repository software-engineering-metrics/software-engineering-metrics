# Đóng góp

Cảm ơn bạn đã giúp cải thiện cuốn sách này. Mọi đóng góp, dù lớn hay nhỏ, từ sửa
một lỗi chính tả đến viết một chủ đề mới, đều được chào đón.

## Quy tắc nền tảng

Cuốn sách tuân theo một văn phong nghiêm ngặt. Những điểm cốt yếu:

- Không dùng dấu gạch ngang dài. Hãy dùng dấu phẩy, dấu hai chấm, dấu ngoặc đơn,
  hoặc tách thành hai câu.
- Không dùng lối nói sáo rỗng ("not only ... but also", "load-bearing" và tương
  tự).
- Viết ấm áp, giản dị, trực tiếp. Gọi người đọc là "bạn." Câu ngắn.
- Định nghĩa thuật ngữ ngay lần đầu dùng. Liên kết các khái niệm chính đến
  Wikipedia ở lần nhắc đầu tiên.
- Chỉ dùng tài liệu tham khảo có thật.
- Mỗi chủ đề về một họ chỉ số đều nêu tên véc-tơ bị lách và rào chắn của nó.

Toàn bộ quy tắc nằm trong `spec/conventions.md` ở gốc kho, và bản rút gọn là
[quy tắc văn phong](quy-tắc-văn-phong.md). Các kiểm thử thực thi những phần cơ
học.

## Thiết lập

Bạn cần Python 3 và [just](https://github.com/casey/just). Kho này chứa nội dung
và đặc tả của cuốn sách, cùng trang SvelteKit
(`software-engineering-metrics.github.io/`) kết xuất chúng thành trang web đã
xuất bản.

```sh
just         # liệt kê các tác vụ
just test    # chạy bộ xác thực
just nav     # sinh lại các tệp điều hướng được sinh ra
just stats   # số chủ đề và số từ
```

## Thực hiện một thay đổi

1. Đọc hướng dẫn liên quan: [biên soạn](biên-soạn.md) cho các chủ đề,
   [điều hướng](điều-hướng.md) cho các tệp được sinh ra, [kiểm thử](kiểm-thử.md)
   cho các kiểm thử.
2. Thực hiện thay đổi nhỏ nhất đủ để hoàn thành việc.
3. Nếu bạn đã thêm, xóa, đổi tên hoặc đánh số lại một chủ đề, hãy cập nhật
   `spec/structure.md` ở gốc kho và chạy `just nav`.
4. Chạy `just test`. Nó phải đạt.
5. Thêm một mục một dòng vào [nhật ký thay đổi](../dự-án/nhật-ký-thay-đổi.md) dưới **Unreleased**.

## Nên làm gì

- Sửa lỗi, đoạn chưa rõ, hoặc tham chiếu đã cũ.
- Cải thiện các ví dụ, đặc biệt là ví dụ cụ thể về doanh nghiệp và chính phủ.
- Kiểm chứng các trích dẫn với nguồn thật.
- Lấp khoảng trống trong phạm vi bao quát của một chủ đề mà không phá vỡ mẫu.

## Nên tránh gì

- Không sửa tay các tệp được sinh ra (`README.md`, `index.md` của mỗi locale,
  `front-matter/table-of-contents.md` và `topics/09-07-index.md`). Hãy sửa các chủ
  đề rồi chạy `just nav`.
- Không sửa trực tiếp `en-001`, `en-gb` hay `en-us`; chúng được `tools/localize.py`
  suy ra từ `en-gb-oxendict`.
- Không thêm chủ đề mà không cập nhật `spec/structure.md`.
- Không đưa vào dấu gạch ngang dài hay các cụm từ bị cấm; các kiểm thử sẽ thất
  bại.

## Báo cáo vấn đề

Hãy mở một issue mô tả vấn đề, tệp và chủ đề, và khi liên quan thì cả nguồn hoặc
tài liệu tham khảo đúng. Các báo cáo nhỏ và cụ thể là dễ xử lý nhất.
